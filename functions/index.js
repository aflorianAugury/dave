const functions = require('firebase-functions');

exports.dialogFlowWebhook = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase! (and sigal)");
});
