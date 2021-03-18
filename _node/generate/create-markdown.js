
'use strict';

let fs = require('fs');
// let mkdirp = require('mkdirp');
let parse = require('csv-parse/lib/sync');
let yaml = require('js-yaml');
let mkdirp = require("mkdirp");
// let request = require("request");

function changeNAtoEmpty(data) {
  for (let key of Object.keys(data)) {
    if (typeof(data[key]) === 'string') {
      const test = data[key].toLowerCase()
                            .trim()
                            .replace(/\.$/, ""); // trailing period
      if (test === 'n/a' || 
          test === 'na'  ||
          test === 'none'||
          test === 'not available'||
          test === 'not applicable') {
        data[key] = ''
      }
    }
  }

  return data;
}

// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript#46181
function isEmailAddress(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function addMailTo(data) {
  for (let key of Object.keys(data)) {
    if (isEmailAddress(data[key])) {
      data[key] = `mailto:${data[key]}`
    }
  }
  return data;
}

function makeBulletedListsMarkdownFriendly(data) {
  for (let key of Object.keys(data)) {
    if (typeof(data[key]) === "string") {
      data[key] = data[key].replace(/\n•/g, "\n*").replace(/\n●/g, "\n*");
    }
  }
  return data;
}

function stringToURI(str) {
  return String(str).toLowerCase()
    .replace(/\s/g, '-')
    .replace(/\//g, '-')
    .replace(/\&/g, '-')
    .replace(/\./g, '-')
    .replace(/\:/g, '-')
    .replace(/\|/g, '-')
    .replace(/\_/g, '-')
    .replace(/\,/g, "-")
    .replace(/\+/g, "-")
    .replace(/\r\n?/, '-')
    .replace(/\'/g, '')
    .replace(/\‘/g, '')
    .replace(/\’/g, '')
    .replace(/\“/g, '')
    .replace(/\”/g, '')
    .replace(/\(/g, '')
    .replace(/\)/g, '')
    .replace(/\{/g, '')
    .replace(/\}/g, '')
    .replace(/\"/g, '')
    .replace(/\#/g, '')
    .replace(/\;/g, '')
    .replace(/\-\-\-\-/g, '-')
    .replace(/\-\-\-/g, '-')
    .replace(/\-\-/g, '-')
    .replace(/^\-/g, '') // Remove starting dash
    .replace(/\-$/g, '') // Remove trailing dash
    .replace(/ /, '') // Remove empty spaces
    .replace(/ /, '') // Remove empty spaces
    .trim();
}

function getArrayFromString(string) {
  if (!string) return []

  string = string
    .replace('undefined:1', '')
    .replace("\"open spaces\"", "“open spaces”")
    .replace("\"Disengaged youth\"", "“Disengaged youth”")
    .replace(/^"/g, '')  // Remove leading quote
    .replace(/"$/g, '')  // Remove trailing quote
    .replace(/', '/g, '", "') // Change single quotes into double quotes (since that’s require for valid JSON)
    .replace(/', "/g, '", "')
    .replace(/", '/g, '", "')
    .replace(/\['/g, '["')
    .replace(/'\]/g, '"]');

  // return JSON.parse(string);

  return string.split(",");
}

function getArrayFromDelimitedString(string) {
  if (!string) return []

  function trimArrayItem(item) {
    return item.trim()
      .replace(/^\-[\s]*/g, "")
      .replace(/^\*[\s]*/g, "")
      .replace(/^[0-9]\.[\s]*/g, "")
      .replace(/^\•[\s]*/g, "")
      .replace(/^\.[\s]*/g, "")
  }

  let commaArray = string.split(',').map(item => trimArrayItem(item)).filter(item => item != '');

  let semicolonArray = string.split(';').map(item => trimArrayItem(item)).filter(item => item != '');

  let lineReturnArray = string.split('\n').map(item => trimArrayItem(item)).filter(item => item != '');

  let array;
  if (commaArray.length > lineReturnArray.length &&
      commaArray.length > semicolonArray.length) {
    array = commaArray;
  } else if (semicolonArray.length > lineReturnArray.length &&
      semicolonArray.length > commaArray.length) {
    array = semicolonArray;
  } else {
    array = lineReturnArray;
  }
  
  // Trim the whitespace, and leaving out empty items
  return array;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getOrganizationType(type) {
  // console.log("getOrganizationType: " + type);

  // TRICKY: The keys in this map should be lowercase
  const organizationTypesMap = {
    "for profit"
    :"For profit business",

    "for-profit organization"
    :"For profit business",

    "forprofit"
    :"For profit business",

    "government"
    :"Government",

    "individual"
    :"Individual",

    "non profit"
    :"Nonprofit",

    "non-profit"
    :"Nonprofit",

    "non-profit organization"
    :"Nonprofit",

    "non-profit organization with independent 501(c)(3) status"
    :"Nonprofit",

    "other"
    :"Other",

    "social enterprise or b-corps"
    :"Social enterprise or B-corps"
  }

  if (organizationTypesMap[type.toLowerCase()]) {
    // console.log("organizationTypesMap[type.toLowerCase()]: " + organizationTypesMap[type.toLowerCase()]);
    return organizationTypesMap[type.toLowerCase()];
  } else {
    console.log(`Unexpected organization type: “${type}”`);
    return type;
  }
}

function mapAllColumnNames(data) {
  const columnNamesMap = {
    'Application ID':
    'application_id',

    "Application title:"
    :"title",

    "Describe your organization:"
    :"organization_description",

    "17. If you'd like to submit a video as part of your application, enter the URL here:"
    :"project_video",

    "Share a direct link for people to donate to your organization:"
    :"link_donate",

    "Share a direct link for people to sign up for volunteer opportunities:"
    :"link_volunteer",

    "Share a direct link for people to sign up for your newsletter:"
    :"link_newsletter",

    "Organization Details: | City:"
    :"mailing_address_city",

    "Organization Details: | Mailing address: *"
    :"mailing_address_street",

    "Organization details: | Organization EIN: *"
    :"ein",

    "Organization details: | Organization name:"
    :"organization_name",

    "Organization Details: | State:"
    :"mailing_address_state",

    "Organization details: | ZIP: *"
    :"mailing_address_zip",

    "How can people reach your organization online? | Organization website:"
    : "organization_website",

    "How can people reach your organization online? | Organization Twitter handle:"
    : "organization_twitter",

    "How can people reach your organization online? | Organization Facebook page:"
    : "organization_facebook",

    "How can people reach your organization online? | Organization Instagram handle:"
    : "organization_instagram",

    "Organization mission statement: (350 character limit)"
    :"Describe the mission of your organization.",

    "1. Please provide a one- to three-sentence blurb summarizing the project, program, or initiative this grant will support.&nbsp;"
    :"project_description",

    "[Q4_Goal_Category] 2. Please select the primary LA2050 goal your application will impact:"
    :"category",

    "[Connect_Metrics] 3. Which of the following CONNECT metrics will you impact?"
    //:"Which of the following CONNECT metrics will your proposal impact?",
    :"connect_metrics",

    "[Create_Metrics] 3. Which of the following CREATE metrics will you impact?"
    //:"Which of the following CREATE metrics will your proposal impact?",
    :"create_metrics",

    "[Learn_Metrics] 3. Which of the following LEARN metrics will you impact?"
    //:"Which of the following LEARN metrics will your proposal impact?",
    :"learn_metrics",

    "[Live_Metrics] 3. Which of the following LIVE metrics will you impact?"
    //:"Which of the following LIVE metrics will your proposal impact?",
    :"live_metrics",

    "[Play_Metrics] 3. Which of the following PLAY metrics will you impact?"
    //:"Which of the following PLAY metrics will your proposal impact?",
    :"play_metrics",

    // "5. Please select any other LA2050 goal categories your proposal will impact"
    // :"Are there any other LA2050 goal categories that your proposal will impact?",

    "[Learn_Other] 4. Select any additional LA2050 goals your application will impact.Select all that apply."
    :"learn_metrics_other",

    "[Create_Other] 4. Select any additional LA2050 goals your application will impact.Select all that apply."
    :"create_metrics_other",

    "[Play_Other] 4. Select any additional LA2050 goals your application will impact.Select all that apply."
    :"play_metrics_other",

    "[Connect_Other] 4. Select any additional LA2050 goals your application will impact.Select all that apply."
    :"connect_metrics_other",

    "[Live_Other] 4. Select any additional LA2050 goals your application will impact.Select all that apply."
    :"live_metrics_other",

    "5. In which areas of Los Angeles will you be directly working?Select all that apply."
    :"In which areas of Los Angeles will you be directly working?",

    "6. In what stage of innovation is this project, program, or initiative?"
    :"In what stage of innovation is this project, program, or initiative?",

    "7. What is the problem that you are seeking to address?"
    :"What is the problem that you are seeking to address?",

    "8. Describe the project, program, or initiative that this grant will support to address the problem identified in Question 7."
    :"Describe the project, program, or initiative that this grant will support to address the problem identified.",

    "10. If this is an existing project, program, or initiative, describe how you are measuring its impact and what evidence you have that it is working to address the problem you've identified.&nbsp;ORIf this is a proposed or early-stage project, program, or initiative, describe how you will define and measure success."
    :"What evidence do you have that this project, program, or initiative is or will be successful, and how will you define and measure success?",

    "13. Approximately how many people will be directly and indirectly impacted by this project, program, or initiative? | a. Direct impact (#):"
    :"Approximately how many people will be directly impacted by this project, program, or initiative?",

    "13. Approximately how many people will be directly and indirectly impacted by this project, program, or initiative? | a. Indirect impact (#):"
    :"Approximately how many people will be indirectly impacted by this project, program, or initiative?",

    "9. Describe how Los Angeles County will be different if your work is successful."
    :"Describe how Los Angeles County will be different if your work is successful.",

    "15. If you are submitting a collaborative proposal, describe the specific role of the partner organization(s) in the project, program, or initiative. If you are not submitting a collaborative proposal, leave this question blank."
    :"Describe the role of collaborating organizations on this project.",

    "16. As a potential grantee, which of LA2050’s resources would be of the most value to you? * Select all that apply."
    :"Which of LA2050’s resources will be of the most value to you?",

    "List the collaborating organizations:"
    :"Please list the organizations collaborating on this proposal."
  }

  const newData = {};

  for (let name in columnNamesMap) {
    if (columnNamesMap.hasOwnProperty(name)) {
      if (data[name] !== undefined) {
        newData[columnNamesMap[name]] = data[name];
      }
    }
  }

  return newData;
}

function createMarkdownFile(data) {

  // if (data["Decision:"]     !== "Approved") return;

  // data.application_id = getApplicationID(data) || "";

  data = mapAllColumnNames(data);
  // console.log(`createMarkdownFile: ${data['title']}`);

  data = changeNAtoEmpty(data);
  data = addMailTo(data);
  data = makeBulletedListsMarkdownFriendly(data);

  let filename = stringToURI(data.organization_name).replace(/^åê/g, "").replace(/åê$/g, "");

  if (filename == "") {
    console.log("Found an empty filename. This is mostly likely an empty spreadsheet row. Skipping…");
    return;
  }

  data.title = data.title.trim();
  data.organization_name = data.organization_name.trim().replace(/^åÊ/g, "").replace(/åÊ$/g, "");

  data.organization_description = getOrganizationType(data.organization_description);

  // console.log("data.organization_description: " + data.organization_description);

  // https://stackoverflow.com/questions/1117584/generating-guids-in-ruby#answer-1126031
  // https://gist.github.com/emacip/b28ba7e9203a38d440e23c38586c303d
  // >> rand(36**8).to_s(36)
  // => "uur0cj2h"
  // data.unique_identifier = getRandomInt(0, Math.pow(36, 8)).toString(36);

  data[`In which areas of Los Angeles will you be directly working?`] =
    getArrayFromString(data[`In which areas of Los Angeles will you be directly working?`]);
  // data[`Which of LA2050’s resources will be of the most value to you?`] =
  //   getArrayFromString(data[`Which of LA2050’s resources will be of the most value to you?`]);

  if (data['Please list the organizations collaborating on this proposal.'] &&
      data['Please list the organizations collaborating on this proposal.'] != "") {
    let items = getArrayFromDelimitedString(data[`Please list the organizations collaborating on this proposal.`]);
    if (items.length > 1) {
      data[`Please list the organizations collaborating on this proposal.`] = items;
    }
  }

  let metrics = getArrayFromString(data.create_metrics)
        .concat(getArrayFromString(data.connect_metrics))
        .concat(getArrayFromString(data.learn_metrics))
        .concat(getArrayFromString(data.live_metrics))
        .concat(getArrayFromString(data.play_metrics));

  const metricsOtherColumns = [
    `learn_metrics_other`,
    `create_metrics_other`,
    `play_metrics_other`,
    `connect_metrics_other`,
    `live_metrics_other`,
  ];

  const reducer = (accumulator, currentValue) => accumulator.concat(currentValue);

  let metrics_other = metricsOtherColumns
    .map(name => getArrayFromString(data[name]))
    .reduce((arrays, nextArray) => arrays.concat(nextArray));

  // console.dir(metrics_other)

  metricsOtherColumns.forEach(name => {
    delete data[name];
  });

  data[`Which metrics will you impact?`] = metrics;
  data[`Indicate any additional LA2050 goals your project will impact.`] = metrics_other;

  data.year = 2021;

  data.category = data.category.toLowerCase().replace("la is the best place to ", "");

  // Handle empty instagram values
  if (data.organization_instagram === '@') {
    data.organization_instagram = '';
  }
  
  // Handle empty twitter values
  if (data.organization_twitter === '@') {
    data.organization_twitter = '';
  }

  // Fix insecure Facebook values
  if (data.organization_facebook.includes('http://')) {
    data.organization_facebook = data.organization_facebook.replace('http://', 'https://');
  }

  // TODO 2021: Enable and use to fix invalid video URLs. for example:
  // www.youtube.com/user/YIWantChange/
  // (missing https://)

  if (data.project_video && data.project_video != "" && !data.project_video.startsWith("http")) {
    console.error(`Found an invalid project_video URL: ${data.project_video}`);
  }

  data.filename = filename;
  data.order = orderCursors[data.category]++;

  // if (!data.project_image) data.project_image = '/assets/images/' + category + '/' + filename + '.jpg';

  // console.dir(data);
  let writePath = '../_' + data.year + '/' + data.category; // Example: _/2019/connect
  
  
  while (data.application_id != "" && data.application_id.length < 10) {
    data.application_id = `0${data.application_id}`;
  }
  data.application_id = String(data.application_id);

  console.log(`writing file: ${filename}`);

  // console.log(data);

  try {
    // if (!data.application_id) throw new Error("application_id is missing");
    // https://www.npmjs.com/package/js-yaml#safedump-object---options-
    let output =
`---
${yaml.safeDump(data)}
---
`

    createFile({ writePath, filename, output });
  } catch (error) {
    console.log("Couldn’t create file for: " + data.title);
    console.log(data["Please list the organizations collaborating on this proposal."]);
    console.error(error);
  }
}

function createFile({ writePath, filename, output }) {
  mkdirp(writePath)
    .then(made => {
      // console.log(`made directories, starting with ${made}`
      fs.writeFileSync(`${writePath}/${filename}.md`, output, 'utf8', (err) => {
        if (err) {
          console.log(err);
        }
      });
    })
    .catch(error => {
      throw error;
    });
}

let orderCursors = {
  learn: 0,
  create: 0,
  play: 0,
  connect: 0,
  live: 0
}

function fixDataCharactersInString(string) {
  string = string
    .replace(/‰Û¢/g, `*`)
    .replace(/‰Ûª/g, `’`)
    .replace(/‰ÛÏ/g, `“`)
    .replace(/‰Û�/g, `”`)
    .replace(/â€“/g, '—')
    .replace(/â€˜/g, '‘')
    .replace(/â€™/g, '’')
    .replace(/â€¯/g, '') // ?
    .replace(/â€”/g, '—')
    .replace(/â€‹/g, '') // ?
    .replace(/â€œ/g, '“') // ?
    .replace(/â€/g, '”') // ?
    .replace(/â€¢/g, "*")
    .replace(/â€¦/g, "…")
    .replace(/â€\x8D/g, "")
    .replace(/âˆš/g, '√')
    .replace(/â–ª/g, '*')
    .replace(/â—\x8F/g, '*')
    .replace(/â„¢/g, '™')
    .replace(/Â·/g, '* ')
    .replace(/Â½/g, '½')
    .replace(/Ãœ/g, 'Ü')
    .replace(/Ã±/g, 'ñ')
    .replace(/Â/g, '')
    .replace(/Í¾/g, ',') // ?
    // ‰Û÷ ?
  return string;
}

function fixDataCharacters(data) {
  for (let key of Object.keys(data)) {
    if (typeof(data[key]) === 'string') {
      data[key] = fixDataCharactersInString(data[key]);
    }
    let fixedPropName = fixDataCharactersInString(key);
    if (key !== fixedPropName) {
      data[fixedPropName] = data[key];
      delete data[key];
    }
  }

  return data;
}

function generateCollections(file_path) {

  console.log('generateCollections: ' + file_path);

  let input = fs.readFileSync(file_path, 'utf8'); // https://nodejs.org/api/fs.html#fs_fs_readfilesync_file_options
  let records = parse(input, {columns: true}); // http://csv.adaltas.com/parse/examples/#using-the-synchronous-api

  function getValueForComparison(data) {
    return stringToURI(fixDataCharactersInString(data['Organization details: | Organization name:']))
  }

  records.sort((a, b) => {
    // a is less than b by some ordering criterion
    if (getValueForComparison(a) < getValueForComparison(b)) {
      return -1
    }
    // a is greater than b by the ordering criterion
    if (getValueForComparison(a) > getValueForComparison(b)) {
      return 1
    }
    // a must be equal to b
    return 0
  })

  for (let index = 0; index < records.length; index++) {
    let data = fixDataCharacters(records[index]);
    // console.log(`Current stage: ${data["Current stage"]}`);
    // console.log(`Decision: ${data["Decision:"]}`);
    createMarkdownFile(data);
  }
  return records;
}

const recordsWithApplicationID = parse(fs.readFileSync('../../_data/2021/Application Export Test 3.3.21 - Sheet1.csv', 'utf8'), {columns: true}); // http://csv.adaltas.com/parse/examples/#using-the-synchronous-api
function getApplicationID(data) {
  let matches = [];
  function alphaOnly(string) {
    if (!string) return;
    if (string === "Sprouts of Promise") string = "Sprouts of Promise Foundation";
    if (string === "LIFT-LA") string = "LIFT-Los Angeles"; 
    if (string === "Lauren Arevalo-Downes") string = "Lauren Arevalo";
    return string.toLowerCase().replace(/[^a-z]/g, "");
  }
  for (let record of recordsWithApplicationID) {
    if (alphaOnly(record["Application"]) === alphaOnly(data["Organization Details: | Organization name: *"]) ||
        alphaOnly(record["User"]) === alphaOnly(data["ABOUT YOU *  | Your name:"]) ||
        alphaOnly(record["Email"]) === alphaOnly(data["ABOUT YOU *  | Your email:"])
      ) {
      matches.push(record["Application ID"]);
    }
  }
  if (matches.length === 1) {
    // console.log("Found one match: " + data["Organization Details: | Organization name: *"]);
    return matches[0];
  }
  if (matches.length > 1) {
    console.log("Found multiple matches for: " + data["Organization Details: | Organization name: *"]);
  } else {
    console.log("Couldn’t find application ID for: " + data["Organization Details: | Organization name: *"]);
  }
}
generateCollections('../../_data/2021/Application Export Test 3.3.21 - Sheet1.csv');

