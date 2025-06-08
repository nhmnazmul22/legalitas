// Import Mongoose
import mongoose, { Document, Model, ObjectId, Schema } from "mongoose";

// Define the interface for the data
export interface Invoice extends Document {
  serviceType: string;
  firstStep: string;
  currentStep: string;
  initialNotes?: string;
  progress: string;
  notificationMethods?: string;
  status: string;
  clientId: ObjectId;
}

// Define the schema
const DataSchema: Schema<Invoice> = new mongoose.Schema(
  {
    serviceType: { type: String, required: true },
    firstStep: { type: String, required: true },
    currentStep: { type: String, required: true },
    initialNotes: { type: String },
    progress: { type: String, required: true },
    notificationMethods: { type: String },
    status: {
      type: String,
      enum: ["reviews", "completed", "rejected"],
      default: "reviews",
    },
    clientId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

// Define the model
const InvoiceModel: Model<Invoice> =
  mongoose.models.invoices || mongoose.model<Invoice>("invoices", DataSchema);

// Export the model
export default InvoiceModel;
