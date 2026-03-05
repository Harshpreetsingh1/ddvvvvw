import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    },
    empId: {
      type: String,
      required: true,
      unique: true
    },
    department: {
      type: String,
      required: true
    },
    designation: {
      type: String,
      required: true
    },
    salary: {
      type: Number,
      min: 0,
      default: 0
    },
    phone: {
      type: String,
      required: true,
      match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number']
    },
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    joiningDate: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Employee', employeeSchema);
