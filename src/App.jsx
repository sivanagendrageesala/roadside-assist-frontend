import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RequestHelp from "./pages/RequestHelp";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RequestHelp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
