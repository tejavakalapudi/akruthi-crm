import VentureSchema from '../src/apis/ventures/schemas/venture';
import { getModelByClient } from '../src/config/mongo';

const ventures = [
  {
    _id: '435988f1-b01f-46b6-993b-6007babc0327',
    name: 'Gayatri',
    flats: ['A10', 'A20', 'A30', 'A40'],
    available: ['A10', 'A20', 'A30', 'A40'],
    leads: [
      '435988f1-b01f-46b6-993b-6007babc0327',
      '435988f1-b01f-46b6-993b-6007babc0327',
      '435988f1-b01f-46b6-993b-6007babc0327',
    ],
  },
  {
    _id: 'add9358a-e61d-48a5-818d-126c7f7503af',
    name: 'Srinivasam',
    flats: ['101', '201', '301', '401'],
    available: ['101', '201', '301', '401'],
    leads: [
      '435988f1-b01f-46b6-993b-6007babc0327',
      '435988f1-b01f-46b6-993b-6007babc0327',
      '435988f1-b01f-46b6-993b-6007babc0327',
    ],
  },
];

export default async () => {
  const ventureModel = await getModelByClient('ventures', VentureSchema);
  await ventureModel.deleteMany();
  return ventureModel.insertMany(ventures);
};
