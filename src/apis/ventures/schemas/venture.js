import { Schema } from 'mongoose';
import uuid from 'uuid';

const ventureSchema = new Schema(
  {
    _id: { type: String, default: uuid.v4 },
    name: {
      type: String,
      unique: true,
    },
    flats: [
      {
        type: String,
      },
    ],
    available: [
      {
        type: String,
      },
    ],
    leads: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

export default ventureSchema;
