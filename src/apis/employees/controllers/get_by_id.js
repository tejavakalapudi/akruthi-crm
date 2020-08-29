import EmployeeSchema from '../schemas/employee';
import { getModelByClient } from '../../../config/mongo';

const getEmployeeById = async (req, res, next) => {
  const employeeModel = await getModelByClient('employees', EmployeeSchema);

  try {
    const response = await employeeModel.find({ _id: req.params.id }).exec();
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};
export default getEmployeeById;
