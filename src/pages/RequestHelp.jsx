import React, { useState } from "react";
import axios from "axios";

const RequestHelp = () => {
  const [form, setForm] = useState({
    issueType: "fuel",
    phone: "",
    location: "",
    notes: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://roadside-assist-backend.onrender.com/api/requests", form);
      alert("Help request submitted successfully");
      setForm({ issueType: "fuel", phone: "", location: "", notes: "" });
    } catch (err) {
      alert("Submission failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Request Roadside Help</h2>

        <label className="block mb-2">Issue Type</label>
        <select name="issueType" value={form.issueType} onChange={handleChange} className="w-full p-2 border rounded mb-4">
          <option value="fuel">Out of Fuel</option>
          <option value="tyre">Flat Tyre</option>
          <option value="battery">Battery Issue</option>
          <option value="towing">Need Towing</option>
        </select>

        <label className="block mb-2">Phone Number</label>
        <input type="text" name="phone" value={form.phone} onChange={handleChange} className="w-full p-2 border rounded mb-4" required />

        <label className="block mb-2">Location</label>
        <input type="text" name="location" value={form.location} onChange={handleChange} className="w-full p-2 border rounded mb-4" required />

        <label className="block mb-2">Notes (Optional)</label>
        <textarea name="notes" value={form.notes} onChange={handleChange} className="w-full p-2 border rounded mb-4" />

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Request Help</button>
      </form>
    </div>
  );
};

export default RequestHelp;
