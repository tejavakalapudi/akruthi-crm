import dbModels from '../../../db_models';

const getEmployees = async (req, res, next) => {
  const { employeeModel } = dbModels;
  try {
    const response = await employeeModel.find().exec();
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};

export default getEmployees;
