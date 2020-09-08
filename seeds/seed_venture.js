import VentureSchema from '../src/apis/ventures/schemas/venture';
import { getModelByClient } from '../src/config/mongo';

const ventures = [
  {
    _id: '435988f1-b01f-46b6-993b-6007babc0327',
    name: 'Gayatri',
    flats: ['A10', 'A20', 'A30', 'A40'],
    available: ['A10', 'A20', 'A30', 'A40'],
    leads: [
      '2e5c7541-2df3-4332-8f38-36d74db70c0e',
      '498c57c4-1fa9-4986-ab1b-5e657d06fa90',
      'c8301466-92ba-44c5-8b72-9adc2314d8d6',
    ],
  },
  {
    _id: 'add9358a-e61d-48a5-818d-126c7f7503af',
    name: 'Srinivasam',
    flats: ['101', '201', '301', '401'],
    available: ['101', '201', '301', '401'],
    leads: [
      '280e2a9a-1d8e-4b77-afd4-a99359011872',
      'b7907df7-deae-41e7-9ed5-c842e8ee35e4',
      'b1a27fa7-326f-4b50-a991-55097d188a75',
    ],
  },
];

export default async () => {
  const ventureModel = await getModelByClient('ventures', VentureSchema);
  await ventureModel.deleteMany();
  return ventureModel.insertMany(ventures);
};
