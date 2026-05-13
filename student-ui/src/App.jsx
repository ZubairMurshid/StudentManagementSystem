// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Departments from "./pages/Departments";
import Enrollments from "./pages/Enrollments";
import Courses from "./pages/Courses";

function App() {
  return (
    <BrowserRouter>
      {/* Simple Navigation */}
      <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
        <Link to="/" style={{ marginRight: "15px" }}>
          Dashboard
        </Link>
        <Link to="/students" style={{ marginRight: "15px" }}>
          Students
        </Link>
        <Link to="/departments" style={{ marginRight: "15px" }}>
          Departments
        </Link>
        <Link to="/enrollments" style={{ marginRight: "15px" }}>
          Enrollments
        </Link>
        <Link to="/courses">Courses</Link>
      </nav>

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/enrollments" element={<Enrollments />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
