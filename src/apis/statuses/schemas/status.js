import { Schema } from 'mongoose';
import uuid from 'uuid';

const statusSchema = new Schema(
  {
    _id: { type: String, default: uuid.v4 },
    name: {
      type: String,
      unique: true,
    },
    phase: { type: String },
  },
  { timestamps: true }
);

export default statusSchema;
