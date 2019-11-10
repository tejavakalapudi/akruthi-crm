// import uuid from 'uuid';
import StatusModel from '../db_models/status';

const createStatus = async (req, res, next) => {
  try {
    const response = await StatusModel.create({ ...req.body });
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};

export default createStatus;
