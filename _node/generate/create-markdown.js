
'use strict';

let fs = require('fs');
// let mkdirp = require('mkdirp');
let parse = require('csv-parse/lib/sync');
let yaml = require('js-yaml');
let mkdirp = require("mkdirp");
// let request = require("request");

function changeNAtoEmpty(data) {
  for (var prop in data) {
    if (typeof(data[prop]) === 'string' && (
          data[prop].toLowerCase() === 'n/a' || 
          data[prop].toLowerCase() === 'na'  ||
          data[prop].toLowerCase() === 'none'
        )) {
      data[prop] = ''
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
  for (var prop in data) {
    if (isEmailAddress(data[prop])) {
      data[prop] = `mailto:${data[prop]}`
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
  //string = `${string}`.replace(/'/g, '"');
  // console.log('parsing JSON string: ' + string);
  // console.log('');
  // console.log('');
  // console.log('');
  return JSON.parse(string);
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

    "other"
    :"Other",

    "social enterprise or b-corps"
    :"Social enterprise or B-corps"
  }

  if (organizationTypesMap[type.toLowerCase()]) {
    // console.log("organizationTypesMap[type.toLowerCase()]: " + organizationTypesMap[type.toLowerCase()]);
    return organizationTypesMap[type.toLowerCase()];
  } else {
    // console.log("Unexpected organization type: " + type);
    return type;
  }
}

function mapAllColumnNames(data) {
  const columnNamesMap = {
    "Project Title"
    :"title",

    "Describe your organization(s):"
    :"organization_description",

    "Enter your video URL here:"
    :"project_video",

    "Please share a direct link for people to donate to your organization: "
    :"link_donate",

    "Please share a direct link for people to sign up for volunteer opportunities:"
    :"link_volunteer",

    "Please share the direct link(s) for people to sign up for your newsletter(s):"
    :"link_newsletter",

    "Organization Details: | City:"
    :"mailing_address_city",

    "Organization Details: | Mailing address: *"
    :"mailing_address_street",

    "Organization Details: | Organization EIN: *"
    :"ein",

    "Organization Details: | Organization name: *"
    :"organization_name",

    "Organization Details: | State:"
    :"mailing_address_state",

    "Organization Details: | ZIP:"
    :"mailing_address_zip",

    "# Applicants"
    : "application_id",

    "How can people reach your organization online? | Organization(s) website(s):"
    : "organization_website",

    "How can people reach your organization online? | Organization(s) Twitter handle(s):"
    : "organization_twitter",

    "How can people reach your organization online? | Organization(s) Facebook page(s):"
    : "organization_facebook",

    "How can people reach your organization online? | Organization(s) Instagram username(s):"
    : "organization_instagram",

    "1. In one to two sentences, please describe the mission of your organization:"
    :"Please describe the mission of your organization.",

    "2. In one to three sentences, please succinctly describe the project or activities your organization would like support for:"
    :"project_description",

    "3. Please select the primary LA2050 goal your submission will impact:"
    :"Which LA2050 goal will your submission most impact?",

    "4. Which of the following CONNECT metrics will your proposal impact?"
    //:"Which of the following CONNECT metrics will your proposal impact?",
    :"connect_metrics",

    "4. Which of the following CREATE metrics will your proposal impact?"
    //:"Which of the following CREATE metrics will your proposal impact?",
    :"create_metrics",

    "4. Which of the following LEARN metrics will your proposal impact? "
    //:"Which of the following LEARN metrics will your proposal impact?",
    :"learn_metrics",

    "4. Which of the following LIVE metrics will your proposal impact?"
    //:"Which of the following LIVE metrics will your proposal impact?",
    :"live_metrics",

    "4. Which of the following PLAY metrics will your proposal impact?"
    //:"Which of the following PLAY metrics will your proposal impact?",
    :"play_metrics",

    // "5. Please select any other LA2050 goal categories your proposal will impact"
    // :"Are there any other LA2050 goal categories that your proposal will impact?",

    "6. In which areas of Los Angeles will you be directly working? "
    :"In which areas of Los Angeles will you be directly working?",

    "7. In what stage of innovation is this project?"
    :"In what stage of innovation is this project?",

    "8a. What is the context for this project? What is the need you’re responding to?"
    :"What is the need you’re responding to?",

    "8b. Why is this project important to the work of your organization? Why is your organization uniquely suited to take this on? "
    :"Why is this project important to the work of your organization?",

    "9. Please explain how you will define and measure success for your project. What is your vision for success for this project?"
    :"Please explain how you will define and measure success for your project.",

    "11. Approximately how many people will be… | a. Directly impacted by this proposal? (#)"
    :"Approximately how many people will be directly impacted by this proposal?",

    "11. Approximately how many people will be… | b. Indirectly impacted by this proposal? (#)"
    :"Approximately how many people will be indirectly impacted by this proposal?",

    "12. Please describe the broader impact of your proposal. Depending on your proposal, you may want to include a description of its impact on the environment and physical space, its impact on policy, impact on the future of the city, a description of the population being served by this proposal, an explanation of the numbers provided in question 11, or other intangibles."
    :"Please describe the broader impact of your proposal.",

    "15. LA2050 will serve as a partner on this project. Which of LA2050’s resources will be of the most value to you? "
    :"Which of LA2050’s resources will be of the most value to you?",

    "Please list the organizations collaborating on this proposal:"
    :"Please list the organizations collaborating on this proposal."
  }

  // const columnNamesMap = {
  //     'Application id': 'application_id',
  //     'Project Title': 'title',
  //     '2. In one to three sentences, please succinctly describe the project or activities your organization would like support for:': 'project_description',
  //     'Organization Details: | Organization name: *' : 'organization_name',
  //     'Describe your organization(s):': 'organization_description',
  //     'Enter your video URL here:' : 'project_video',
  //     'Please share the direct link(s) for people to sign up for your newsletter(s):': 'link_newsletter',
  //     'How can people reach your organization online? | Organization(s) website(s):': 'organization_website',
  //     'How can people reach your organization online? | Organization(s) Twitter handle(s):': 'organization_twitter',
  //     'How can people reach your organization online? | Organization(s) Facebook page(s):' : 'organization_facebook',
  //     'How can people reach your organization online? | Organization(s) Instagram username(s):': 'organization_instagram',
  //     'Please share a direct link for people to donate to your organization:': 'link_donate',
  //     'Please share a direct link for people to sign up for volunteer opportunities:': 'link_volunteer',
  //     '1. In one to two sentences, please describe the mission of your organization:': 'organization_activity',
  //     '8. Briefly tell us a story that demonstrates how your organization turns inspiration into impact.': 'project_proposal_description',
  //     '5. In which areas of Los Angeles will you be directly working?': 'project_areas',
  //     '15. LA2050 will serve as a partner on this project. Which of LA2050’s resources will be of the most value to you?': 'project_la2050_community_resources',
  //     "6. In what stage of innovation is this project?": 'project_innovation_stage',
  //     'Please list the organizations collaborating on this proposal:': 'project_collaborators',
  //     '12. Please explain how you will define and measure success for your project.*' : 'project_measure',
  //     '4. Which of the following LEARN metrics will your activation impact?' : 'learn_metrics',
  //     '4. Which of the following CREATE metrics will your activation impact?' : 'create_metrics',
  //     '4. Which of the following PLAY metrics will your activation impact?' : 'play_metrics',
  //     '4. Which of the following CONNECT metrics will your activation impact?' : 'connect_metrics',
  //     '4. Which of the following LIVE metrics will your activation impact?' : 'live_metrics',
  //     'Learn_Other' : 'learn_other',
  //     'Create_Other' : 'create_other',
  //     'Play_Other' : 'play_other',
  //     'Connect_Other' : 'connect_other',
  //     'Live_Other' : 'live_other',
  //     'Organization Details: | Organization EIN: *': 'ein',
  //     'Organization Details: | Mailing address: *': 'mailing_address_street',
  //     'Organization Details: | City:': 'mailing_address_city',
  //     'Organization Details: | State:': 'mailing_address_state',
  //     'Organization Details: | ZIP:': 'mailing_address_zip',
  //     'Application label': 'category',
  // }

  for (let name in columnNamesMap) {
    if (columnNamesMap.hasOwnProperty(name)) {
      if (data[name] !== undefined) {
        data[columnNamesMap[name]] = data[name];
      }
    }
  }

  for (let name in columnNamesMap) {
    if (columnNamesMap.hasOwnProperty(name)) {
      if (data[name] !== undefined) {
        delete data[name];
      }
    }
  }

  /*
  const bestPlaceMap = {
    'connect7': 'project_proposal_best_place',
    'create7': 'project_proposal_best_place',
    'learn7': 'project_proposal_best_place',
    'live7': 'project_proposal_best_place',
    'play7': 'project_proposal_best_place'
  }
  */

  // const bestPlaceMap = {
  //   '7. Please provide the details of your project or activities, including: (1)': 'project_proposal_best_place',
  //   '7. Please provide the details of your project or activities, including: (2)': 'project_proposal_best_place',
  //   '7. Please provide the details of your project or activities, including: (3)': 'project_proposal_best_place',
  //   '7. Please provide the details of your project or activities, including: (4)': 'project_proposal_best_place',
  //   '7. Please provide the details of your project or activities, including: (5)': 'project_proposal_best_place'
  // }
  // 
  // for (let name in bestPlaceMap) {
  //   if (bestPlaceMap.hasOwnProperty(name)) {
  //     if (data[name] !== undefined && data[name] != '') {
  //       data[bestPlaceMap[name]] = data[name];
  //     }
  //   }
  // }
  // 
  // for (let name in bestPlaceMap) {
  //   if (bestPlaceMap.hasOwnProperty(name)) {
  //     if (data[name] !== undefined) {
  //       delete data[name];
  //     }
  //   }
  // }

}

function createMarkdownFile(data) {

  if (data["Current stage"] !== "Moderation Process") return;

  mapAllColumnNames(data);

  data = changeNAtoEmpty(data);
  data = addMailTo(data);

  let filename = stringToURI(data.organization_name).replace(/^åê/g, "").replace(/åê$/g, "");

  if (filename == "") {
    console.log("Found an empty filename. This is mostly likely an empty spreadsheet row. Skipping…");
    return;
  }

  data.title = data.title.trim();
  data.organization_name = data.organization_name.trim().replace(/^åÊ/g, "").replace(/åÊ$/g, "");

  data.organization_description = getOrganizationType(data.organization_description);

  // console.log("data.organization_description: " + data.organization_description);

  console.log('createMarkdownFile for ' + data.organization_name);

  // Page title
  //data.title = data.title + ' — My LA2050 Grants Challenge';

  // https://stackoverflow.com/questions/1117584/generating-guids-in-ruby#answer-1126031
  // https://gist.github.com/emacip/b28ba7e9203a38d440e23c38586c303d
  // >> rand(36**8).to_s(36)
  // => "uur0cj2h"
  // data.unique_identifier = getRandomInt(0, Math.pow(36, 8)).toString(36);

  data[`In which areas of Los Angeles will you be directly working?`] =
    getArrayFromString(data[`In which areas of Los Angeles will you be directly working?`]);
  data[`Which of LA2050’s resources will be of the most value to you?`] =
    getArrayFromString(data[`Which of LA2050’s resources will be of the most value to you?`]);

  let metrics = getArrayFromString(data.create_metrics)
        .concat(getArrayFromString(data.connect_metrics))
        .concat(getArrayFromString(data.learn_metrics))
        .concat(getArrayFromString(data.live_metrics))
        .concat(getArrayFromString(data.play_metrics));

  /*
  let metrics_other = getArrayFromString(data.create_other)
        .concat(getArrayFromString(data.connect_other))
        .concat(getArrayFromString(data.learn_other))
        .concat(getArrayFromString(data.live_other))
        .concat(getArrayFromString(data.play_other))
  */

  const metricsOtherColumns = [
    `5. Please select any other LA2050 goal categories your proposal will impact (a)`,
    `5. Please select any other LA2050 goal categories your proposal will impact (b)`,
    `5. Please select any other LA2050 goal categories your proposal will impact (c)`,
    `5. Please select any other LA2050 goal categories your proposal will impact (d)`,
    `5. Please select any other LA2050 goal categories your proposal will impact (e)`
  ];

  const reducer = (accumulator, currentValue) => accumulator.concat(currentValue);
  
  if (filename == "the-urban-warehouse") {
    console.log({answer: data["5. Please select any other LA2050 goal categories your proposal will impact (a)"]});
      console.log(data["5. Please select any other LA2050 goal categories your proposal will impact (b)"]);
        console.log(data["5. Please select any other LA2050 goal categories your proposal will impact (c)"]);
          console.log(data["5. Please select any other LA2050 goal categories your proposal will impact (d)"]);
            console.log(data["5. Please select any other LA2050 goal categories your proposal will impact (e)"]);
  }

  let metrics_other = metricsOtherColumns
    .map(name => getArrayFromString(data[name]))
    .reduce((arrays, nextArray) => arrays.concat(nextArray));

  // console.dir(metrics_other)

  metricsOtherColumns.forEach(name => {
    delete data[name];
  });

  // let metrics_other = getArrayFromString(data[`4. Please select any other LA2050 goal categories your proposal will impact (v)`])
  //             .concat(getArrayFromString(data[`4. Please select any other LA2050 goal categories your proposal will impact (w)`]))
  //             .concat(getArrayFromString(data[`4. Please select any other LA2050 goal categories your proposal will impact (x)`]))
  //             .concat(getArrayFromString(data[`5. Please select any other LA2050 goal categories your proposal will impact (y)`]))
  //             .concat(getArrayFromString(data[`4. Please select any other LA2050 goal categories your proposal will impact (z)`]))

  data[`Which metrics will your submission impact?`] = metrics;
  data[`Are there any other LA2050 goal categories that your proposal will impact?`]   = metrics_other;

  data.year = 2020;

  // OPTIONAL: Move category to the bottom
  let category = data["Which LA2050 goal will your submission most impact?"].toLowerCase().replace("la is the best place to ", "");
  delete data.category
  data.category = category

  // if (!data.category) data.category = 'connect';
  // 
  // if (data.category.toLowerCase().includes('connect')) {
  //   delete data.category;
  //   data.category = "connect";
  // } else if (data.category.toLowerCase().includes('play')) {
  //   delete data.category;
  //   data.category = "play";
  // } else if (data.category.toLowerCase().includes('learn')) {
  //   delete data.category;
  //   data.category = "learn";
  // } else if (data.category.toLowerCase().includes('live')) {
  //   delete data.category;
  //   data.category = "live";
  // } else if (data.category.toLowerCase().includes('create')) {
  //   delete data.category;
  //   data.category = "create";
  // }
  
  // if (!category) category = data.category.toLowerCase();
  // data.category = category;

  // data.uri = '/' + category + '/' + filename + '/';

  // data.organization_website = data.organization_website.split('; ');
  // data.organization_twitter = data.organization_twitter.split('; ');
  // data.organization_facebook = data.organization_facebook.split('; ');
  // data.organization_instagram = data.organization_instagram.split('; ');
  /*
  data.project_proposal_mobilize = getArrayFromString(data.project_proposal_mobilize);
  data.project_video = data.project_video.replace('watch', 'embed');
  */

  /*
  // TEMPORARY: The project video and newsletter fields might be mixed up
  // https://stackoverflow.com/questions/6680825/return-string-without-trailing-slash#6680877
  if (!data.link_newsletter && data.project_video && data.project_video != "" && data.project_video.replace(/\/$/, "") == data.organization_website.replace(/\/$/, "")) {
    // data.link_newsletter = data.project_video;
    data.project_video = "";
  }
  if (!data.project_video) data.project_video = '';
  */

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

  data.filename = filename;
  data.order = orderCursors[data.category]++;

  // if (!data.project_image) data.project_image = '/assets/images/' + category + '/' + filename + '.jpg';

  let toDelete = [
    `Decision:`,
    'Current stage',
    `ABOUT YOU *  | Your name:`,
    `ABOUT YOU *  | Your phone number:`,
    `ABOUT YOU *  | Your email:`,
    `Has your organization previously applied for a My LA2050 grant? Check all that apply*:`,
    `How large is your organization?*`,
    `If yes, how many collaborators are involved in this proposal? `,
    `Is this proposal a collaboration? `,
    `What is your organization‰Ûªs annual operating budget?*`,
    `10. Please provide a timeline and description of the activities for this project (for the duration of the grant period - approx. July 2020 - July 2021; a high-level summary is sufficient). `,
    `13. Please include a line-item budget describing how you will use the grant funding to implement your project or activities. Please provide a budget assuming your organization wins the full $100,000 grant. `,
    `Has your organization previously applied for a My LA2050 grant? Check all that apply*`,
    `How can people reach these organizations online? | Organization(s) Facebook page(s):`,
    `How can people reach these organizations online? | Organization(s) Instagram username(s):`,
    `How can people reach these organizations online? | Organization(s) Twitter handle(s):`,
    `How can people reach these organizations online? | Organization(s) website(s):`,
    `How did you hear about this challenge?`,
    'learn_metrics',
    'create_metrics',
    'play_metrics',
    'connect_metrics',
    'live_metrics',
    `14. If you are submitting a collaborative proposal, please describe the specific role of partner organization/s in the project.`,
    `What is your organization’s annual operating budget?*`
    // 'Application name',
    // 'Application state',
    // 'Application status',
    // 'Awarded',
    // '3. Please select the primary LA2050 goal your submission will impact:',
    // 'Current stage',
    // 'Moderation Decision',
    // 'What is your organization’s annual operating budget?*',
    // `13. Please include a detailed line-item budget describing how you will use the grant funding to implement your project or activities.`,
    // 'How can people reach these organizations online? | Organization(s) Facebook page(s):',
    // 'How can people reach these organizations online? | Organization(s) Instagram username(s):',
    // 'How can people reach these organizations online? | Organization(s) Twitter handle(s):',
    // 'How can people reach these organizations online? | Organization(s) website(s):',
    // `How did you hear about this challenge?`,
    // 'If yes, how many collaborators are involved in this proposal?',
    // 'Is this proposal a collaboration?',
    // 'ABOUT YOU * | Your phone number:',
    // 'ABOUT YOU * | Your name:',
    // 'ABOUT YOU * | Your phone number:',
    // 'ABOUT YOU * | Your email:',
    // '10. Please list at least one major barrier, challenge, or opposing group(s) you anticipate facing. What is your strategy for overcoming this? *',
    // '11. Are there other organizations doing similar work (whether complementary or competitive) and what differentiates yours? *',
    // '14. If your proposal will cost more than the amount requested, how will you cover the additional costs?*',
    // '9. If you are submitting a collaborative proposal, please describe the role of partner organization/s in the project.*',
    // 'How large is your organization?*',
    // 'Has your organization previously applied for a My LA2050 grant? Check all that apply*',
    // 'learn_other',
    // 'create_other',
    // 'play_other',
    // 'connect_other',
    // 'live_other'
  ];

  toDelete.forEach(name => {
    delete data[name];
  })

//   for (let key of Object.keys(data)) {
//     if (typeof(data[key]) !== "string") continue;
//     data[key] = data[key].replace(/\\r\\n/g, `
// `);
//   }



if (filename == "the-urban-warehouse") {
  console.log(data["Please explain how you will define and measure success for your project."]);
}

  // for (let key of Object.keys(data)) {
  //   if (typeof(data[key]) !== "string") continue;
  // 
  //   // if (data[key].startsWith(`"`) && data[key].endsWith(`"`)) {
  //   //   console.log("Data start with a quote");
  //   // }
  //   // console.log(data[key]);
  //   // data[key] = data[key].replace(/^"/g, "").replace(/"$/g, "");
  // }

  // const applicationIDs = {
  //   'Los Angeles Conservation Corps': '5962365920',
  //   `Lost Angels Children's Project`: '2827931015',
  // 
  // }

  // console.dir(data);
  let writePath = '../_' + data.year + '/' + data.category; // Example: _/2019/connect

  // https://www.npmjs.com/package/js-yaml#safedump-object---options-
  let output =
`---
${yaml.safeDump(data)}
---
`

  createFile({ writePath, filename, output });
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
  for (let prop in data) {
    if (data.hasOwnProperty(prop)) {
      if (typeof(data[prop]) === 'string') {
        data[prop] = fixDataCharactersInString(data[prop]);
      }
      let fixedPropName = fixDataCharactersInString(prop);
      if (prop !== fixedPropName) {
        data[fixedPropName] = data[prop];
        delete data[prop];
      }
    }
  }

  return data;
}

function generateCollections(file_path) {

  console.log('generateCollections: ' + file_path);

  let input = fs.readFileSync(file_path, 'utf8'); // https://nodejs.org/api/fs.html#fs_fs_readfilesync_file_options
  let records = parse(input, {columns: true}); // http://csv.adaltas.com/parse/examples/#using-the-synchronous-api

  function getValueForComparison(data) {
    return stringToURI(fixDataCharactersInString(data['Organization Details: | Organization name: *']))
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
    createMarkdownFile(data);
  }
  return records;
}

generateCollections('../../_data/all_data_Apr 6 2020 04_18 PM (PDT)-edited.csv');

