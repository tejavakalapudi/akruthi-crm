import db_Models from '../../../db_models';

const deleteLead = async (req, res, next) => {
  const { leadModel } = db_Models;
  try {
    const response = await leadModel.findByIdAndDelete(req.params.id);

    return res.send(response);
  } catch (error) {
    return next(error);
  }
};
export default deleteLead;
