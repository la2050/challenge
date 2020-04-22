
'use strict';

let fs = require('fs');
let yaml = require('js-yaml');

function getYaml(text, filename) {
  const DELIMITER = `---
`
  let items = text.split(DELIMITER)
  if (items.length === 3) {
    return `
${items[1]}`
  } else {
    console.log('unexpected markdown format detected')
    console.log(items.length)
    // console.log(text)
    console.log(filename)
  }
}

function getContent(text, filename) {
  const DELIMITER = `---
`
  let items = text.split(DELIMITER)
  if (items.length === 3) {
    return `
${items[2]}`
  } else {
    console.log('unexpected markdown format detected')
    console.log(items.length)
    // console.log(text)
  }
}

function loadMarkdown(filename) {
  // let input = fs.readFileSync(filename, 'utf8'); // https://nodejs.org/api/fs.html#fs_fs_readfilesync_file_options

  // Get document, or throw exception on error 
  try {
    let text = fs.readFileSync(filename, 'utf8');
    let yamlText = getYaml(text, filename);
    let contentText = getContent(text, filename);

    if (!yamlText || !contentText) return;

    let data = {}
    data.yaml = yaml.safeLoad(yamlText);
    data.content = contentText;
    return data;

  } catch (e) {
    console.log(e);
  }
}

function saveMarkdown(filename, data) {
  // console.log('filename')
  // console.log(filename);

  // console.dir(data);

  // https://www.npmjs.com/package/js-yaml#safedump-object---options-
  let output =
`---
${yaml.safeDump(data.yaml)}
---
`
// ${data.content}

//console.log(output);
//return;

  fs.writeFileSync(filename, output, 'utf8', (err) => {
    if (err) {
      console.log(err);
    }
  });
}

function getArrayFromString(string) {
  if (!string) return []

  string = string
    .replace('undefined:1', '')
    .replace("\"open spaces\"", "“open spaces”")
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
  }
  if (semicolonArray.length > lineReturnArray.length &&
      semicolonArray.length > commaArray.length) {
    array = semicolonArray;
  }
  if (lineReturnArray.length > semicolonArray.length &&
      lineReturnArray.length > commaArray.length) {
    array = lineReturnArray;
  }
  
  // Trim the whitespace, and leaving out empty items
  return array;
}

// function getArrayFromDelimitedString2020(string) {
//   if (string &&
//       string != "") {
//     const items = string.split(/\n/)
//     if (items.length > 1) {
//       return items.map(item => {
//         return item.trim()
//           .replace(/^\-[\s]*/g, "")
//           .replace(/^\*[\s]*/g, "")
//           .replace(/^[0-9]\.[\s]*/g, "")
//           .replace(/^\•[\s]*/g, "")
//           .replace(/^\.[\s]*/g, "")
//       }).filter(item => item != "");
//     }
//   }
// }

function convertStringsToJSON(data) {
  console.log('before: ' + data.category_metrics);
  data.category_metrics = getArrayFromString(data.category_metrics);
  console.log('after: ' + data.category_metrics);
  console.log('before: ' + data.category_other);
  data.category_other   = getArrayFromString(data.category_other);
  console.log('after: ' + data.category_metrics);
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

function makeBulletedListsMarkdownFriendly(string) {
  return string.replace(/\n•/g, "\n*").replace(/\n●/g, "\n*");
}

function is_valid_url(url) {
  return url.match(/^(ht|f)tps?:\/\/[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/);
}

let orderCursors = {
  learn: 0,
  create: 0,
  play: 0,
  connect: 0,
  live: 0
}

function processFile(filename) {

  // Load the contents of the file
  let data = loadMarkdown(filename);
  if (!data) return;

  for (let key of Object.keys(data.yaml)) {
    if (typeof(data.yaml[key]) === "string") {
      data.yaml[key] = makeBulletedListsMarkdownFriendly(data.yaml[key]);
    }
  }

  // if (data.yaml['Please list the organizations collaborating on this proposal.'].includes(",")) {
  //   console.log(data.yaml['Please list the organizations collaborating on this proposal.'])
  // 
  //   data.yaml['Please list the organizations collaborating on this proposal.'] =
  //    getArrayFromDelimitedString(data.yaml['Please list the organizations collaborating on this proposal.']);
  // 
  // 
  //  console.log(data.yaml['Please list the organizations collaborating on this proposal.'])   
  // }

  // data.yaml.is_test_data = true;


  // Simplify image URL
  // let project_image_paths = data.yaml.project_image.split('/');
  // data.yaml.project_image = project_image_paths[project_image_paths.length - 1];

  // if (data.yaml.project_video !== '' && data.yaml.project_video.indexOf('youtu') < 0 && data.yaml.project_video.indexOf('vimeo') < 0) {
  //   console.log(filename)
  //   console.log(data.yaml.project_video)
  // }

  // if (data.yaml.project_video.indexOf('https://www.youtube.com/embed?') >= 0 && data.yaml.project_video.indexOf('https://www.youtube.com/embed?v=') < 0) {
  //   console.log(filename)
  //   console.log(data.yaml.project_video)
  // }

  // if (data.yaml.project_video.indexOf('#') >= 0 ||
  //     data.yaml.project_video.indexOf(' ') >= 0) {
  //   console.log('*******');
  //   console.log(data.yaml.url)
  //   console.log(data.yaml.project_video);
  // }


  // if (data.yaml.organization_website.indexOf('/') === 0 ||
  //     data.yaml.organization_twitter.indexOf('/') === 0 ||
  //     data.yaml.organization_facebook.indexOf('/') === 0 ||
  //     data.yaml.organization_instagram.indexOf('/') === 0 ||
  //     data.yaml.link_newsletter.indexOf('/') === 0 ||
  //     data.yaml.link_donate.indexOf('/') === 0 ||
  //     data.yaml.link_volunteer.indexOf('/') === 0) {
  //   console.log(filename)
  // }

  /*
  if (data.yaml.organization_website.indexOf('#') >= 0 ||
      data.yaml.organization_twitter.indexOf('#') >= 0 ||
      data.yaml.organization_facebook.indexOf('#') >= 0 ||
      data.yaml.organization_instagram.indexOf('#') >= 0 ||
      data.yaml.link_newsletter.indexOf('#') >= 0 ||
      data.yaml.link_donate.indexOf('#') >= 0 ||
      data.yaml.link_volunteer.indexOf('#') >= 0) {

    //console.log('uri, organization_name, problem detected with');

    console.log('*******');
    console.log(data.yaml.url)

    let problemList = []

    if (data.yaml.organization_website.indexOf('#') >= 0) {
      problemList.push('organization_website');
    }
    if (data.yaml.organization_twitter.indexOf('#') >= 0) {
      problemList.push('organization_twitter');
    }
    if (data.yaml.organization_facebook.indexOf('#') >= 0) {
      problemList.push('organization_facebook');
    }
    if (data.yaml.organization_instagram.indexOf('#') >= 0) {
      problemList.push('organization_instagram');
    }
    if (data.yaml.link_newsletter.indexOf('#') >= 0) {
      problemList.push('link_newsletter');
    }
    if (data.yaml.link_donate.indexOf('#') >= 0) {
      problemList.push('link_donate');
    }
    if (data.yaml.link_volunteer.indexOf('#') >= 0) {
      problemList.push('link_volunteer');
    }

    problemList.forEach(function(problemField) {
      console.log(data.yaml[problemField]);
    });

    // console.log(`https://staging-challenge.la2050.org${data.yaml.url}, https://github.com/la2050/challenge/edit/staging/_${data.yaml.category}/${filename}, ${data.yaml.organization_name}, ${problemList.join('; ')}`);
    // console.log(`https://github.com/la2050/challenge/edit/staging/_${data.yaml.category}/${filename.split('/')[filename.split('/').length - 1]}`);
  }
  */
  
  

  // data.yaml = changeNAtoEmpty(data.yaml);
  // data.yaml = addMailTo(data.yaml);

  // delete data.yaml.project_proposal_impact;
  // delete data.yaml.unique_identifier;

  // data.yaml = convertStringsToJSON(data.yaml)

  // try {
  //   if (data.yaml.project_collaborators = getArrayFromDelimitedString(data.yaml.project_collaborators);
  // } catch(e) {
  //   console.log("couldn’t update project_collaborators for: " + data.yaml.organization_name);
  // }

  data.yaml.order = orderCursors[data.yaml.category]++;

  saveMarkdown(filename, data);
}

// https://stackoverflow.com/questions/20822273/best-way-to-get-folder-and-file-list-in-javascript#21459809
function getAllFilesFromFolder(dir) {

    let filesystem = require("fs");
    let results = [];

    filesystem.readdirSync(dir).forEach(function(file) {

        file = dir+'/'+file;
        let stat = filesystem.statSync(file);

        if (stat && stat.isDirectory()) {
            results = results.concat(getAllFilesFromFolder(file))
        } else results.push(file);

    });

    return results;

};

function updateMarkdownFiles(folder) {
  let files = getAllFilesFromFolder(folder);

  //console.log(files);

  // For each location file
  for (let index = 0; index < files.length; index++) {
    if (files[index].indexOf('.DS_Store') >= 0) continue;
    processFile(files[index]);
  }
}

updateMarkdownFiles('../_2020/learn');
updateMarkdownFiles('../_2020/create');
updateMarkdownFiles('../_2020/play');
updateMarkdownFiles('../_2020/connect');
updateMarkdownFiles('../_2020/live');
