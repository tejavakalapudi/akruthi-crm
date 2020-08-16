import { Schema } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
});

export default userSchema;
