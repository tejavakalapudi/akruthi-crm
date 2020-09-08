import LeadSchema from '../src/apis/leads/schemas/lead';
import { getModelByClient } from '../src/config/mongo';

const leads = [
  {
    _id: '2e5c7541-2df3-4332-8f38-36d74db70c0e',
    customer_name: 'Customer 1',
    contact: '+91111111111',
    venture: {
      _id: '435988f1-b01f-46b6-993b-6007babc0327',
      name: 'Gayatri',
    },
    flat_No: 'A10',
    status: 'lead_generated',
    employee_assigned: {
      _id: '75fbc336-292a-46cf-b772-4393e2ea046a',
      name: 'Mahesh',
    },
    source: 'walk-in',
    pre_sale: true,
    post_sale: false,
    followup_required: false,
  },
  {
    _id: '498c57c4-1fa9-4986-ab1b-5e657d06fa90',
    customer_name: 'Customer 2',
    contact: '+912222222222',
    venture: {
      _id: '435988f1-b01f-46b6-993b-6007babc0327',
      name: 'Gayatri',
    },
    flat_No: 'A20',
    status: 'lead_generated',
    employee_assigned: {
      _id: '75fbc336-292a-46cf-b772-4393e2ea046a',
      name: 'Mahesh',
    },
    source: 'housing.com',
    pre_sale: true,
    post_sale: false,
    followup_required: true,
  },
  {
    _id: 'c8301466-92ba-44c5-8b72-9adc2314d8d6',
    customer_name: 'Customer 3',
    contact: '+913333333333',
    venture: {
      _id: '435988f1-b01f-46b6-993b-6007babc0327',
      name: 'Gayatri',
    },
    flat_No: 'A30',
    status: 'visit_scheduled',
    employee_assigned: {
      _id: '75fbc336-292a-46cf-b772-4393e2ea046a',
      name: 'Mahesh',
    },
    source: 'housing.com',
    pre_sale: true,
    post_sale: false,
    followup_required: true,
  },
  {
    _id: '280e2a9a-1d8e-4b77-afd4-a99359011872',
    customer_name: 'Customer 4',
    contact: '+914444444444',
    venture: {
      _id: 'add9358a-e61d-48a5-818d-126c7f7503af',
      name: 'Srinivasam',
    },
    flat_No: '101',
    status: 'visited_onsite',
    employee_assigned: {
      _id: '15fcc695-c1a6-471d-9585-d1651a5fa1e6',
      name: 'Arjun',
    },
    source: 'walk-in',
    pre_sale: true,
    post_sale: false,
    followup_required: false,
  },
  {
    _id: 'b7907df7-deae-41e7-9ed5-c842e8ee35e4',
    customer_name: 'Customer 5',
    contact: '+915555555555',
    venture: {
      _id: 'add9358a-e61d-48a5-818d-126c7f7503af',
      name: 'Srinivasam',
    },
    flat_No: '201',
    status: 'booked',
    employee_assigned: {
      _id: '15fcc695-c1a6-471d-9585-d1651a5fa1e6',
      name: 'Arjun',
    },
    source: 'walk-in',
    pre_sale: false,
    post_sale: true,
    followup_required: true,
  },
  {
    _id: 'b1a27fa7-326f-4b50-a991-55097d188a75',
    customer_name: 'Customer 6',
    contact: '+916666666666',
    venture: {
      _id: 'add9358a-e61d-48a5-818d-126c7f7503af',
      name: 'Srinivasam',
    },
    flat_No: '301',
    status: 'registered',
    employee_assigned: {
      _id: '15fcc695-c1a6-471d-9585-d1651a5fa1e6',
      name: 'Arjun',
    },
    source: '99acres',
    pre_sale: false,
    post_sale: true,
    followup_required: false,
  },
];

export default async () => {
  const leadModel = await getModelByClient('leads', LeadSchema);
  await leadModel.deleteMany();
  return leadModel.insertMany(leads);
};
