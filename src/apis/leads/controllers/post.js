/* eslint-disable no-underscore-dangle */

import LeadSchema from '../schemas/lead';
import { LEAD_SCHEMA_NAME } from '../../../constants/schemas';
import { getModelByClient } from '../../../config/mongo';

const createLead = async (req, res, next) => {
  try {
    const leadModel = await getModelByClient(LEAD_SCHEMA_NAME, LeadSchema);
    const response = await leadModel.create(req.body);

    // if (res.locals.employeeAssigned) {
    //   res.locals.employeeAssigned.leads = [...res.locals.employeeAssigned.leads, response._id];
    //   await res.locals.employeeAssigned.save();
    // }

    // if (res.locals.ventureSelected) {
    //   res.locals.ventureSelected.leads = [...res.locals.ventureSelected.leads, response._id];
    //   await res.locals.ventureSelected.save();
    // }

    return res.send(response);
  } catch (error) {
    return next(error);
  }
};
export default createLead;
