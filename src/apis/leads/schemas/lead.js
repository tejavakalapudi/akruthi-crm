import { Schema } from 'mongoose';
import uuid from 'uuid';

const leadSchema = new Schema(
  {
    _id: { type: String, default: uuid.v4 },
    customer_name: { type: String },
    email: { type: String },
    contact: { type: String, unique: true },
    venture: { _id: String, name: String },
    flat_no: { type: String },
    status: { type: String, default: 'lead_generated' },
    employee_assigned: { _id: String, name: String },
    source: { type: String, default: 'walk_in' },
    pre_sale: { type: Boolean, default: true },
    post_sale: { type: Boolean, default: false },
    followup_required: { type: Boolean, default: true },
    notes: [
      {
        text: { type: String },
        createdAt: { type: Date, default: Date.now },
        source: { type: String, default: 'walk_in' },
      },
    ],
  },
  { timestamps: true }
);
export default leadSchema;
