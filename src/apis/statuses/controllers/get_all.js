// import StatusModel from '../db_models/status';

const getStatuses = async (req, res, next) => {
  try {
    // const response = await StatusModel.find().exec();
    return res.send("Success!");
  } catch (error) {
    return next(error);
  }
};

export default getStatuses;
