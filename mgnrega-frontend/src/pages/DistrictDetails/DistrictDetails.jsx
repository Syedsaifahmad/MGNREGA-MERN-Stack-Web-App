import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "./DistrictDetails.css";

const DistrictDetails = () => {
  const navigate = useNavigate();
  const { district } = useParams();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    const fetchDistrictData = async () => {
      try {
        const res = await fetch(`https://mgnrega-mern-stack-web-app.onrender.com/api/mgnrega/${district}`);
        const result = await res.json();

        if (result.success && result.data) {
          setData([
            {
              name: district,
              totalWorks: result.data.totalWorks,
              householdsWorked: result.data.householdsWorked,
              totalWages: result.data.totalWages,
              averageDays: result.data.averageDays,
            },
          ]);
        } else {
          setError("No data found for this district.");
        }
      } catch {
        setError("Failed to fetch district data.");
      } finally {
        setLoading(false);
      }
    };

    fetchDistrictData();
  }, [district]);

  return (
    <div className="district-page">
      {/* <button className="back-btn" onClick={() => navigate("/")}>
        ← Back to Home
      </button> */}

      <div className="district-header">
        <h1>{district} District</h1>
        <p className="subtitle">MGNREGA Progress Overview</p>
      </div>

      {loading ? (
        <p className="loading">Fetching latest data...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="chart-wrapper">
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="totalWorks" fill="#3498db" name="Total Works" />
                <Bar
                  dataKey="householdsWorked"
                  fill="#2ecc71"
                  name="Households Worked"
                />
                <Bar dataKey="totalWages" fill="#f39c12" name="Total Wages (₹)" />
                <Bar
                  dataKey="averageDays"
                  fill="#9b59b6"
                  name="Average Days Worked"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="data-cards">
            <div className="card">
              <h3>Total Works</h3>
              <p>{data[0]?.totalWorks}</p>
            </div>
            <div className="card">
              <h3>Households Worked</h3>
              <p>{data[0]?.householdsWorked}</p>
            </div>
            <div className="card">
              <h3>Total Wages (₹)</h3>
              <p>{data[0]?.totalWages.toLocaleString()}</p>
            </div>
            <div className="card">
              <h3>Average Days</h3>
              <p>{data[0]?.averageDays}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DistrictDetails;
