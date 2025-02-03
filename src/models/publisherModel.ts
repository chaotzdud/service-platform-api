import mongoose from "mongoose";

const publisherSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    cpf: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    address: { type: String, required: true },
    ratings: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Publisher = mongoose.model("Publisher", publisherSchema);

export default Publisher;
