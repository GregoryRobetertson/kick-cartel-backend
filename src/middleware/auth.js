const firebaseAuth = require('firebase-admin/auth');

async function authenticateUser(req, res, next) {
  const idToken = req.headers.authorization.split('Bearer ')[1];
  try {
    const decodedToken = await firebaseAuth.verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Error verifying ID token:', error);
    res.status(401).json({ error: 'Unauthorized' });
  }
}
