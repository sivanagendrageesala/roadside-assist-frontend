import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      const res = await axios.get("https://roadside-assist-backend.onrender.com/api/requests");
      setRequests(res.data);
    };
    fetchRequests();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Service Requests Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {requests.map((req) => (
          <div key={req._id} className="bg-white p-4 rounded-xl shadow">
            <p><strong>Issue:</strong> {req.issueType}</p>
            <p><strong>Phone:</strong> {req.phone}</p>
            <p><strong>Location:</strong> {req.location}</p>
            {req.notes && <p><strong>Notes:</strong> {req.notes}</p>}
            <p className="text-sm text-gray-500">{new Date(req.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
