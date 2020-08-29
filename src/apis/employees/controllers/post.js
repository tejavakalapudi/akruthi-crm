import EmployeeSchema from '../schemas/employee';
import { getModelByClient } from '../../../config/mongo';

const createEmployee = async (req, res, next) => {
  const employeeModel = await getModelByClient('employees', EmployeeSchema);

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
