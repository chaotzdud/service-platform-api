import mongoose, { Document, Schema } from 'mongoose';

interface Provider extends Document {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  cpf: string;
  dateOfBirth: Date;
  address: string;
  skills: string[];
}

const ProviderSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
    cpf: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    address: { type: String, required: true },
    skills: { type: [String], required: true }
  },
  { timestamps: true }
);

const Provider = mongoose.model<Provider>('Provider', ProviderSchema);
export default Provider;
