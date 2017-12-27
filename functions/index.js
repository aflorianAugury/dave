const functions = require('firebase-functions');

exports.oauth2Redirect = functions.https.onRequest((request, response) => {
  response.send();
});

exports.dialogFlowWebhook = functions.https.onRequest((request, response) => {
  console.log(request);
  response.send();
});