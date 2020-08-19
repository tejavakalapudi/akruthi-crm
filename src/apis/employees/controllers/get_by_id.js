import db_Models from '../../../db_models';

const getEmployeeById = async (req, res, next) => {
  const { employeeModel } = db_Models;
  try {
    const response = await employeeModel.find({ _id: req.params.id }).exec();
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};
export default getEmployeeById;
