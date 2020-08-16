import { Schema } from 'mongoose';

const ventureSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  flats: {
    type: Map,
    of: String,
  },
  available: {
    type: Map,
    of: String,
  },
});

export default ventureSchema;
