import axios from "axios";
import MgnregaData from "../models/MgnregaData.js";

// Fetch and store MGNREGA data (using mock data for now)
export const fetchAndStoreData = async (req, res) => {
  try {
    const { district, month, year } = req.params;

    // --- MOCK DATA (replace this later with real API) ---
    const data = {
      total_works: 1245,
      households_worked: 865,
      total_wages: 985432,
      average_days: 46,
    };

    // Save to DB
    const record = new MgnregaData({
      districtName: district,
      month,
      year,
      totalWorks: data.total_works,
      householdsWorked: data.households_worked,
      totalWages: data.total_wages,
      averageDays: data.average_days,
    });

    await record.save();
    res.json({ success: true, message: "Data stored successfully", data: record });
  } catch (error) {
    console.error("❌ Error fetching/storing data:", error.message);
    res.status(500).json({ success: false, error: "Error fetching MGNREGA data" });
  }
};

// Get data from DB for frontend
export const getDistrictData = async (req, res) => {
  try {
    const { district } = req.params;
    const data = await MgnregaData.find({ districtName: district }).sort({ year: -1, month: -1 });
    res.json({ success: true, data });
  } catch (error) {
    console.error("❌ Error fetching data:", error.message);
    res.status(500).json({ success: false, error: "Failed to load data" });
  }
};
