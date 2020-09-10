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

    const { limit, page } = filters;

    delete filters.limit;
    delete filters.page;
    delete filters.sort_by;

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

    const data = await leadModel
      .find(filters)
      .limit(limit)
      .skip((page - 1) * limit)
      .sort([['updatedAt', req.query.sort_by.date]])
      .exec();
    const totalItems = await leadModel.countDocuments(filters);

    return res.send({
      data,
      pagination: {
        current: page,
        total: Math.ceil(totalItems / limit),
        totalItems,
      },
    });
  } catch (error) {
    return next(error);
  }
};

export default getAllLeads;

// https://kb.objectrocket.com/mongo-db/mongoose-sort-multiple-fields-609
