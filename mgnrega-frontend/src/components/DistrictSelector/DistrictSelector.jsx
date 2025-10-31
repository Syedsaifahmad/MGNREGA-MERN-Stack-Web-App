import React from "react";
import "./DistrictSelector.css";

const DistrictSelector = ({ district, setDistrict, handleFetchData }) => {
  const districts = ["Patna", "Gaya", "Muzaffarpur", "Nalanda", "Bhagalpur"];

  return (
    <div className="district-selector">
      <h2>Select Your District</h2>
      <div className="selector-container">
        <select
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          className="dropdown"
        >
          <option value="">-- Select District --</option>
          {districts.map((dist, i) => (
            <option key={i} value={dist}>
              {dist}
            </option>
          ))}
        </select>

        <button
          className="fetch-btn"
          onClick={handleFetchData}
          disabled={!district}
        >
          Fetch Data
        </button>
      </div>
    </div>
  );
};

export default DistrictSelector;
