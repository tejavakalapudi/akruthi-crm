import Boom from '@hapi/boom';
import { firebaseDB } from '../config/firebase';
import createConnection from '../config/mongo';

export default async (req, res, next) => {
  try {
    const clientId = req.headers['x-client-id'];
    if (!clientId) throw Boom.badRequest('Client ID is missing in headers');

    const clientCollection = firebaseDB.collection('akruthi-crm').doc(req.headers['x-client-id']);
    const clientDoc = await clientCollection.get();

    if (!clientDoc.exists) {
      throw Boom.badRequest('Client not registered');
    }

    await createConnection(clientId);
    return next();
  } catch (error) {
    return next(error);
  }
};
