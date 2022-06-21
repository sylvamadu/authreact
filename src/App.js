import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import DefaultLayout from "./DefaultLayout";
import Home from "./dashboard/pages/Home";
import Profile from "./dashboard/pages/Profile";
import Dashboard from "./dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/*dashboard homepage route is /app */}
        <Route path="app" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route exact path="*" element={<DefaultLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
