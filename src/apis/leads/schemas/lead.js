import { Schema } from 'mongoose';
import uuid from 'uuid';

const leadSchema = new Schema(
  {
    _id: { type: String, default: uuid.v4 },
    customer_name: { type: String },
    contact: { type: String },
    venture: { type: String, default: uuid.v4 },
    flat_No: { type: String },
    status: { type: String },
    employee_assigned: { type: String, default: uuid.v4 },
    source: { type: String },
    pre_sale: { type: Boolean, default: true },
    post_sale: { type: Boolean, default: false },
    followup_required: { type: Boolean, default: true },
  },
  { timestamps: true }
);
export default leadSchema;
