import { Schema } from 'mongoose';

const statusSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  phase: {
    type: Map,
    of: String,
  },
});

export default statusSchema;
