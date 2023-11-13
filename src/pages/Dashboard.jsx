// Import necessary dependencies
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from React Router

const Dashboard = () => {
  const [infoData, setInfoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch info data using Axios
    axios
      .get("https://hungry-boa-neckerchief.cyclic.app/api/info")
      .then((response) => {
        setInfoData(response.data.data); // Assuming the actual info data is nested under the 'data' property
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="container mx-auto my-8 p-8 bg-gray-200 shadow-md">
      <h1 className="text-2xl font-bold mb-4">Info Dashboard</h1>
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.isArray(infoData) && infoData.length > 0 ? (
              infoData.map((info) => (
                <div key={info._id} className="bg-white p-4 rounded shadow-md">
                  {/* Use Link to make each question clickable */}
                  <Link to={`/question/${info._id}`}>
                    {/* Display the information as needed */}
                    <p className="text-blue-500 font-bold mb-2">
                      Topic: {info.topic}
                    </p>
                    <p>Question: {info.question}</p>
                    {/* Add more fields as needed */}
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No info available.</p>
            )}
          </div>
          {/* Button to navigate to the page for adding new questions */}
          <Link
            to="/add-question"
            className="bg-blue-500 text-white py-2 px-4 mt-4 rounded inline-block"
          >
            Add New Question
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
