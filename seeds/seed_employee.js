import EmployeeSchema from '../src/apis/employees/schemas/employee';
import { getModelByClient } from '../src/config/mongo';

const employees = [
  {
    _id: '75fbc336-292a-46cf-b772-4393e2ea046a',
    name: 'Mahesh',
    leads: [
      '435988f1-b01f-46b6-993b-6007babc0327',
      '435988f1-b01f-46b6-993b-6007babc0327',
      '435988f1-b01f-46b6-993b-6007babc0327',
    ],
    conversions: [],
    registrations: [],
    contact: '+919703000639',
  },
  {
    _id: '15fcc695-c1a6-471d-9585-d1651a5fa1e6',
    name: 'Arjun',
    leads: [
      '435988f1-b01f-46b6-993b-6007babc0327',
      '435988f1-b01f-46b6-993b-6007babc0327',
      '435988f1-b01f-46b6-993b-6007babc0327',
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
