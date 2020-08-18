import * as admin from 'firebase-admin';
import credentials from './credentials';

admin.initializeApp({
  credential: admin.credential.cert(credentials),
  databaseURL: 'https://akruthi-crm.firebaseio.com',
});

const firebaseAuth = admin.auth();
export const firebaseDB = admin.firestore();

export default firebaseAuth;
