import db_Models from '../../../db_models';

const deleteEmployee = async (req, res, next) => {
  const { employeeModel } = db_Models;
  try {
    const response = await employeeModel.findByIdAndDelete(req.params.id);

    return res.send(response);
  } catch (error) {
    return next(error);
  }
};
export default deleteEmployee;
