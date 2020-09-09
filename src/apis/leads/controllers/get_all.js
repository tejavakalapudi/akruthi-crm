import Boom from '@hapi/boom';

import LeadSchema from '../schemas/lead';
import EmployeeSchema from '../../employees/schemas/employee';
import VentureSchema from '../../ventures/schemas/venture';
import { getModelByClient } from '../../../config/mongo';
import { LEAD_SCHEMA_NAME, EMPLOYEE_SCHEMA_NAME, VENTURE_SCHEMA_NAME } from '../../../constants/schemas';

const getAllLeads = async (req, res, next) => {
  const leadModel = await getModelByClient(LEAD_SCHEMA_NAME, LeadSchema);
  try {
    let filters = JSON.parse(JSON.stringify(req.query));
    let employeeAssigned;

    if (req.query.employee_assigned) {
      delete filters.employee_assigned;

      const employeeModel = await getModelByClient(EMPLOYEE_SCHEMA_NAME, EmployeeSchema);
      try {
        employeeAssigned = await employeeModel.findById(req.query.employee_assigned);
        filters = {
          ...filters,
          _id: { $in: employeeAssigned.leads },
        };
      } catch (error) {
        throw Boom.badRequest('Invalid Employee ID');
      }
    }

    if (req.query.venture) {
      delete filters.venture;

      const ventureModel = await getModelByClient(VENTURE_SCHEMA_NAME, VentureSchema);
      try {
        const ventureAssigned = await ventureModel.findById(req.query.venture);
        const leadsToFilter =
          req.query.employee_assigned && employeeAssigned
            ? employeeAssigned.leads.filter(id => ventureAssigned.leads.includes(id))
            : ventureAssigned.leads;

        filters = {
          ...filters,
          _id: { $in: leadsToFilter },
        };
      } catch (error) {
        throw Boom.badRequest('Invalid Venture ID');
      }
    }

    const response = await leadModel.find(filters).exec();

    return res.send(response);
  } catch (error) {
    return next(error);
  }
};
export default getAllLeads;
