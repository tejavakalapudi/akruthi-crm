import Boom from '@hapi/boom';
import firebaseAuth, { firebaseDB } from '../config/firebase';

export default async (req, res, next) => {
  try {
    const clientCollection = firebaseDB.collection('akruthi-crm').doc(req.body.client_name);
    const clientDoc = await clientCollection.get();
    const userRecord = res.locals.user;

    if (clientDoc.exists) {
      const adminData = clientDoc.data();
      const isAdmin = adminData.admins && adminData.admins.includes(userRecord.email);
      res.locals.user = {
        ...userRecord,
        admin: isAdmin,
      };

      try {
        await firebaseAuth.setCustomUserClaims(userRecord.uid, {
          admin: isAdmin,
        });
        return next();
      } catch (error) {
        throw Boom.preconditionFailed('Unable to set custom admin claim on firebase user object');
      }
    }

    return next();
  } catch (error) {
    throw next(error);
  }
};
