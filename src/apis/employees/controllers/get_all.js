import EmployeeSchema from '../schemas/employee';
import { getModelByClient } from '../../../config/mongo';

const getEmployees = async (req, res, next) => {
  const employeeModel = await getModelByClient('employees', EmployeeSchema);
  try {
    const response = await employeeModel.find().exec();
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};

export default getEmployees;
