import LeadSchema from '../schemas/lead';
import { getModelByClient } from '../../../config/mongo';
import { LEAD_SCHEMA_NAME } from '../../../constants/schemas';

const updateLead = async (req, res, next) => {
  try {
    const leadModel = await getModelByClient(LEAD_SCHEMA_NAME, LeadSchema);
    // let previousLead;

    // if (res.locals.employeeAssigned || res.locals.ventureSelected) {
    //   previousLead = await leadModel.findById(req.params.id);
    // }

    const response = await leadModel.findByIdAndUpdate(req.params.id, req.body);

    // if (res.locals.employeeAssigned && previousLead.employee_assigned._id !== req.body.employee_assigned._id) {
    //   const employeeModel = await getModelByClient(EMPLOYEE_SCHEMA_NAME, EmployeeSchema);

    //   const prevEmployee = await employeeModel.findById(previousLead.employee_assigned._id).exec();
    //   prevEmployee.leads = prevEmployee.leads.filter(id => id !== response._id);
    //   await prevEmployee.save();

    //   res.locals.employeeAssigned.leads = [...res.locals.employeeAssigned.leads, response._id];
    //   await res.locals.employeeAssigned.save();
    // }

    // if (res.locals.ventureSelected && previousLead.venture._id !== req.body.venture._id) {
    //   const ventureModel = await getModelByClient(VENTURE_SCHEMA_NAME, VentureSchema);

    //   const prevVenture = await ventureModel.findById(previousLead.venture._id).exec();
    //   prevVenture.leads = prevVenture.leads.filter(id => id !== response._id);
    //   await prevVenture.save();

    //   res.locals.ventureSelected.leads = [...res.locals.ventureSelected.leads, response._id];
    //   await res.locals.ventureSelected.save();
    // }
    return res.send(response);
  } catch (error) {
    return next(error);
  }
};
export default updateLead;
