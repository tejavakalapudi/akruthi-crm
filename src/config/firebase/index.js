// Web_Client_id: '70375767371-n87ph187e9hsoutphcfindvcn4ritg2d.apps.googleusercontent.com'
// Web_Client_secret: '_oSEsOHH_uo7fQ8-5pzqWEfB'

import * as admin from 'firebase-admin';
import credentials from './credentials';

admin.initializeApp({
  credential: admin.credential.cert(credentials),
  databaseURL: 'https://akruthi-crm.firebaseio.com',
});

const firebaseAuth = admin.auth();

export default firebaseAuth;
