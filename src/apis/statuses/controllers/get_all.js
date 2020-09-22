import StatusSchema from '../schemas/status';
import { getModelByClient } from '../../../config/mongo';

const getStatuses = async (req, res, next) => {
  const statusModel = await getModelByClient('statuses', StatusSchema);
  try {
    const response = await statusModel.find().exec();
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};

export default getStatuses;
