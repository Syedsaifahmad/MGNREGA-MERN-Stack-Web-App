import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Reads from .env
});

// Fetch all saved data for a district
export const fetchDistrictData = async (district) => {
  try {
    const response = await API.get(`/data/${district}`);
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching district data:", error);
    return { success: false, error: "Failed to fetch data" };
  }
};

// Fetch data from external API and store in DB
export const fetchAndStoreData = async (district, month, year) => {
  try {
    const response = await API.get(`/fetch/${district}/${month}/${year}`);
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching and storing data:", error);
    return { success: false, error: "Failed to store data" };
  }
};
