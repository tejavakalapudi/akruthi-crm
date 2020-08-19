import db_Models from '../../../db_models';

const updateEmployee = async (req, res, next) => {
  const { employeeModel } = db_Models;
  try {
    const response = await employeeModel.findByIdAndUpdate(req.params.id, req.body);
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};
export default updateEmployee;
