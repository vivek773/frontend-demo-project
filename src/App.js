import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/main.scss";
import Navbar from "./components/Navbar";
import AddEmployee from "./pages/AddEmployee";
import EmployeeList from "./pages/EmployeeList";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<AddEmployee />} />
          <Route path="/view-employees" element={<EmployeeList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
