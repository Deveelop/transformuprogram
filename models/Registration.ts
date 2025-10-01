import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IRegistration extends Document {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  gender: string;
  whyJoin: string;
  consistencyAreas: string[];
  otherArea?: string;
  selectedPackage: string;
  commitment: boolean;
}

const registrationSchema = new Schema<IRegistration>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
    gender: { type: String, required: true },
    whyJoin: { type: String, required: true },
    consistencyAreas: { type: [String], required: true },
    otherArea: { type: String },
    selectedPackage: { type: String, required: true },
    commitment: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const Registration: Model<IRegistration> =
  mongoose.models.Registration ||
  mongoose.model<IRegistration>('Registration', registrationSchema);

export default Registration;