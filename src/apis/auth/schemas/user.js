import { Schema } from 'mongoose';
import uuid from 'uuid';

const userSchema = new Schema(
  {
    _id: { type: String, default: uuid.v4 },
    name: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

export default userSchema;
