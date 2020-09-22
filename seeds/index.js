import connectToDb, { mongodb } from '../src/config/mongo';
import seedEmployees from './seed_employee';
import seedVentures from './seed_venture';
import seedLeads from './seed_lead';
import seedStatuses from './seed_status';

const initSeed = async () => {
  await connectToDb('seed');
  await seedStatuses();
  await seedEmployees();
  await seedVentures();
  await seedLeads();
  process.exit(0);
};

initSeed();
