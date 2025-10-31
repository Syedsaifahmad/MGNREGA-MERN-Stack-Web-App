import mongoose from "mongoose";

const MgnregaDataSchema = new mongoose.Schema({
  districtName: String,
  month: String,
  year: Number,
  totalWorks: Number,
  householdsWorked: Number,
  totalWages: Number,
  averageDays: Number,
  fetchedAt: { type: Date, default: Date.now },
});

// ✅ Correct default export syntax for ES Modules
const MgnregaData = mongoose.model("MgnregaData", MgnregaDataSchema);
export default MgnregaData;
