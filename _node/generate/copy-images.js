
'use strict';

let fs = require('fs');
let mkdirp = require('mkdirp');
let yaml = require('js-yaml');

function getYaml(text, filename) {
  const DELIMITER = '---';
  let items = text.split(DELIMITER);
  if (items.length === 3) {
    return items[1];
  } else {
    console.log('unexpected markdown format detected');
    console.log(items.length);
    console.log(text);
    console.log(filename);
  }
}

function getContent(text, filename) {
  const DELIMITER = '---';
  let items = text.split(DELIMITER);
  if (items.length === 3) {
    return items[2];
  } else {
    console.log('unexpected markdown format detected');
    console.log(items.length);
    console.log(text);
  }
}


function loadMarkdown(filename) {
  let input = fs.readFileSync(filename, 'utf8'); // https://nodejs.org/api/fs.html#fs_fs_readfilesync_file_options

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


function getMatchingFile(application_id) {
  // console.dir(submissionFiles);
  for (let index = 0; index < submissionFiles.length; index++) {
    if (submissionFiles[index].indexOf(application_id) >= 0 &&
        submissionFiles[index].indexOf('.pdf') < 0) {
        return submissionFiles[index];
    }
  }
}


function getMatchingFileByOrganizationName(organization_name) {
  
  function alphaOnly(string) {
    return string.toLowerCase().replace(/[^a-z]/g, "");
  }
  // console.dir(submissionFiles);
  for (let index = 0; index < submissionFiles.length; index++) {
    // console.log(submissionFiles[index]);
    // console.log(organization_name);
    if (alphaOnly(submissionFiles[index]).includes(alphaOnly(organization_name)) &&
        !submissionFiles[index].includes('.pdf')) {
        return submissionFiles[index];
    }
  }
}


function processFile(filename) {

  // Load the contents of the file
  let data = loadMarkdown(filename).yaml;
  if (!data) return;
    
  // console.log('data.application_id: ' + data.application_id);

  // Get the application ID
  // Look for the image folder that matches
  // let fromFilePath = getMatchingFile(data.application_id);

  let fromFilePath = getMatchingFileByOrganizationName(data.organization_name);

  if (!fromFilePath) {
    console.log('couldn’t find a matching image file for: ' + filename + ' with application_id: ' + data.application_id);
    return;
  }

  // console.log('found a matching file: ' + fromFilePath);

  let imageExtension = fromFilePath.split('.')[fromFilePath.split('.').length - 1];

  // Copy the image inside that folder to the destination folder
  let writePath = `../assets/images/${data.year}/${data.category}/original`;
  let toFilename = `${data.filename}.${imageExtension}`;

  // console.log(`writePath: ${writePath}`);
  // console.log(`toFilename: ${toFilename}`);

  // https://stackoverflow.com/questions/4980243/how-to-copy-a-file#11334246

  let encoding = 'binary';
  let content = fs.readFileSync(fromFilePath, encoding);
  
  
  createImageFile({ writePath, filename: toFilename, output: content, encoding });
  
  // mkdirp(writePath, function (err) {
  //   if (err) {
  //     console.error(err);
  //   } else {
  //     fs.writeFileSync(writePath + '/' + toFilename, content, encoding, (err) => {
  //       if (err) {
  //         console.log(err);
  //       }
  //     });
  //   }
  // });
}


function createImageFile({ writePath, filename, output, encoding = 'utf8' }) {
  mkdirp(writePath)
    .then(made => {
      // console.log(`made directories, starting with ${made}`
      fs.writeFileSync(`${writePath}/${filename}`, output, encoding, (err) => {
        if (err) {
          console.log(err);
        }
      });
    })
    .catch(error => {
      throw error;
    });
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


function updateLocations(folder) {

  // Get a list of markdown files
  let files = getAllFilesFromFolder(folder);

  console.log(files);

  // For each location file
  for (let index = 0; index < files.length; index++) {
    if (files[index].indexOf('.DS_Store') >= 0) continue;
    processFile(files[index]);
  }
}


let submissionFiles = getAllFilesFromFolder('../../_data/download-2020-title');

updateLocations('../_2020/learn');
updateLocations('../_2020/create');
updateLocations('../_2020/play');
updateLocations('../_2020/connect');
updateLocations('../_2020/live');
