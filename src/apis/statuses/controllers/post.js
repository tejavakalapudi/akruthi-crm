import StatusSchema from '../schemas/status';
import { getModelByClient } from '../../../config/mongo';

const createStatus = async (req, res, next) => {
  const statusModel = await getModelByClient('status', StatusSchema);
  try {
    const response = await statusModel.create(req.body);
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};

export default createStatus;
