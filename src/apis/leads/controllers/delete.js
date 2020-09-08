import LeadSchema from '../schemas/lead';
import { getModelByClient } from '../../../config/mongo';
import { LEAD_SCHEMA_NAME } from '../../../constants/schemas';

const deleteLead = async (req, res, next) => {
  const leadModel = await getModelByClient(LEAD_SCHEMA_NAME, LeadSchema);
  try {
    const response = await leadModel.findByIdAndDelete(req.params.id);

    if (res.locals.employeeAssigned) {
      res.locals.employeeAssigned.leads = res.locals.employeeAssigned.leads.filter(id => id !== req.params.id);
      await res.locals.employeeAssigned.save();
    }

    if (res.locals.ventureSelected) {
      res.locals.ventureSelected.leads = res.locals.ventureSelected.leads.filter(id => id !== req.params.id);
      await res.locals.ventureSelected.save();
    }

    return res.send(response);
  } catch (error) {
    return next(error);
  }
};
export default deleteLead;
