import { Schema } from 'mongoose';
import uuid from 'uuid';

const employeeSchema = new Schema(
  {
    _id: { type: String, default: uuid.v4 },
    name: {
      type: String,
      unique: true,
    },
    leads: [{ type: String }],
    conversions: [{ type: String }],
    registrations: [{ type: String }],
    contact: { type: String },
  },
  { timestamps: true }
);
export default employeeSchema;
