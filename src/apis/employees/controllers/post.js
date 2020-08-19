import dbModels from '../../../db_models';

const createEmployee = async (req, res, next) => {
  const { employeeModel } = dbModels;
  try {
    const response = await employeeModel.create({
      ...req.body,
    });
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};
export default createEmployee;
