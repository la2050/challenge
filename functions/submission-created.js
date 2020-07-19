

// Ask the voting results site to rebuild after a voting form is submitted


// https://www.netlify.com/blog/2018/09/14/forms-and-functions/
// https://stackoverflow.com/questions/6819143/curl-equivalent-in-node-js
// https://nodejs.org/api/https.html

const https = require("https");

exports.handler = function(event, context, callback) {

  const options = {
    host: 'api.netlify.com',
    port: 443,
    path: `/build_hooks/${process.env.BUILD_HOOK_VOTING_RESULTS}`,
    method: 'POST'
  };

  const req = https.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
  });

  req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
  });

  req.end();
}
