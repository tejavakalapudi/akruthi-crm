import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const statusSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  phase: [
    {
      type: String,
    },
  ],
});

const Status = model('Status', statusSchema);
export default Status;

// To delete all other data dependent on this table
// https://www.robinwieruch.de/mongodb-express-setup-tutorial
