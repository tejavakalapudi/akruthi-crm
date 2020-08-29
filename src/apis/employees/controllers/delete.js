import EmployeeSchema from '../schemas/employee';
import { getModelByClient } from '../../../config/mongo';

const deleteEmployee = async (req, res, next) => {
  const employeeModel = await getModelByClient('employees', EmployeeSchema);

  try {
    const response = await employeeModel.findByIdAndDelete(req.params.id);
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};
export default deleteEmployee;
