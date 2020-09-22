import StatusSchema from '../src/apis/statuses/schemas/status';
import { getModelByClient } from '../src/config/mongo';

const statuses = [
  {
    name: 'lead_generated',
    phase: 'pre_sale',
  },
  {
    name: 'visit_scheduled',
    phase: 'pre_sale',
  },
  {
    name: 'visited_onsite',
    phase: 'pre_sale',
  },
  {
    name: 'booked',
    phase: 'pre_sale',
  },
  {
    name: 'agreement_signed',
    phase: 'post_sale',
  },
  {
    name: 'loan_pending',
    phase: 'post_sale',
  },
  {
    name: 'loan_sanctioned',
    phase: 'post_sale',
  },
  {
    name: 'registered',
    phase: 'post_sale',
  },
  {
    name: 'cancelled',
    phase: 'pre_sale',
  },
];

export default async () => {
  const statusModel = await getModelByClient('statuses', StatusSchema);
  await statusModel.deleteMany();
  return statusModel.insertMany(statuses);
};
