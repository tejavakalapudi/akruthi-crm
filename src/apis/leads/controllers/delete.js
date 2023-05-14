import LeadSchema from '../schemas/lead';
import { getModelByClient } from '../../../config/mongo';
import { LEAD_SCHEMA_NAME } from '../../../constants/schemas';

const deleteLead = async (req, res, next) => {
  const leadModel = await getModelByClient(LEAD_SCHEMA_NAME, LeadSchema);
  try {
    const idsToDelete = req.params.ids.split(',');
    let response;

    if (idsToDelete.length > 1) {
      response = await leadModel.deleteMany({ _id: { $in: idsToDelete } });
      return res.send(response);
    }

    response = await leadModel.findOneAndDelete({ _id: idsToDelete[0] });

    // Site.deleteMany({ userUID: uid, id: { $in: [10, 2, 3, 5]}}, function(err) {})

    // if (res.locals.employeeAssigned) {
    //   res.locals.employeeAssigned.leads = res.locals.employeeAssigned.leads.filter(id => id !== req.params.id);
    //   await res.locals.employeeAssigned.save();
    // }

    // if (res.locals.ventureSelected) {
    //   res.locals.ventureSelected.leads = res.locals.ventureSelected.leads.filter(id => id !== req.params.id);
    //   await res.locals.ventureSelected.save();
    // }

    return res.send(response);
  } catch (error) {
    return next(error);
  }
};
export default deleteLead;
