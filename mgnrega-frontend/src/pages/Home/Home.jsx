import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DistrictSelector from "../../components/DistrictSelector/DistrictSelector";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [district, setDistrict] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!district) {
      setError("Please select a district");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`http://localhost:5000/api/mgnrega/${district}`);
      const data = await response.json();

      console.log("Fetched Data:", data);

      if (data && data.success && data.data) {
        navigate(`/district/${district}`, { state: { districtData: data.data } });
      } else {
        setError("No data found for this district");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Error fetching district data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>MGNREGA District Performance</h1>
        <p className="subtitle">
          Track your district’s progress and performance under the MGNREGA program.
        </p>

        <DistrictSelector
          district={district}
          setDistrict={setDistrict}
          handleFetchData={handleSubmit}
        />

        {loading && <p className="loading">Fetching data...</p>}
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default Home;
