const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.cert('./firebase-admin'),
});
