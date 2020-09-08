import EmployeeSchema from '../src/apis/employees/schemas/employee';
import { getModelByClient } from '../src/config/mongo';

const employees = [
  {
    _id: '75fbc336-292a-46cf-b772-4393e2ea046a',
    name: 'Mahesh',
    leads: [
      '2e5c7541-2df3-4332-8f38-36d74db70c0e',
      '498c57c4-1fa9-4986-ab1b-5e657d06fa90',
      'c8301466-92ba-44c5-8b72-9adc2314d8d6',
    ],
    conversions: [],
    registrations: [],
    contact: '+919703000639',
  },
  {
    _id: '15fcc695-c1a6-471d-9585-d1651a5fa1e6',
    name: 'Arjun',
    leads: [
      '280e2a9a-1d8e-4b77-afd4-a99359011872',
      'b7907df7-deae-41e7-9ed5-c842e8ee35e4',
      'b1a27fa7-326f-4b50-a991-55097d188a75',
    ],
    conversions: [],
    registrations: [],
    contact: '+918888888888',
  },
];

export default async () => {
  const employeeModel = await getModelByClient('employees', EmployeeSchema);
  await employeeModel.deleteMany();
  return employeeModel.insertMany(employees);
};
