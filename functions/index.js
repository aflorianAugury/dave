const functions = require('firebase-functions');

exports.oauth2Redirect = functions.https.onRequest((request, response) => {
});

exports.dialogFlowWebhook = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase! (and sigal)");
});