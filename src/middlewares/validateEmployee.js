import Boom from '@hapi/boom';

import EmployeeSchema from '../apis/employees/schemas/employee';
import { EMPLOYEE_SCHEMA_NAME } from '../constants/schemas';
import { getModelByClient } from '../config/mongo';

export default async (req, res, next) => {
  try {
    const employeeModel = await getModelByClient(EMPLOYEE_SCHEMA_NAME, EmployeeSchema);
    if (req.body.employee_assigned) {
      try {
        const employeeAssigned = await employeeModel.findById(req.body.employee_assigned).exec();
        req.body = {
          ...req.body,
          employee_assigned: {
            _id: employeeAssigned._id,
            name: employeeAssigned.name,
          },
        };
        res.locals.employeeAssigned = employeeAssigned;
      } catch (error) {
        throw Boom.badRequest('Invalid Employee ID');
      }
    }
    return next();
  } catch (error) {
    return next(error);
  }
};
