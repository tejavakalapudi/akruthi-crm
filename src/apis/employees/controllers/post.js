import EmployeeSchema from '../schemas/employee';
import { getModelByClient } from '../../../config/mongo';
import { EMPLOYEE_SCHEMA_NAME } from '../../../constants/schemas';

const createEmployee = async (req, res, next) => {
  const employeeModel = await getModelByClient(EMPLOYEE_SCHEMA_NAME, EmployeeSchema);

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
