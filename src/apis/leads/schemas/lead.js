import { Schema } from 'mongoose';
import uuid from 'uuid';
// import { VENTURE_SCHEMA_NAME, EMPLOYEE_SCHEMA_NAME } from '../../../constants/schemas';

const leadSchema = new Schema(
  {
    _id: { type: String, default: uuid.v4 },
    customer_name: { type: String },
    contact: { type: String },
    venture: { _id: String, name: String },
    flat_No: { type: String },
    status: { type: String },
    employee_assigned: { _id: String, name: String },
    source: { type: String },
    pre_sale: { type: Boolean, default: true },
    post_sale: { type: Boolean, default: false },
    followup_required: { type: Boolean, default: true },
  },
  { timestamps: true }
);
export default leadSchema;
