// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [studentsCount, setStudentsCount] = useState(0);
  const [departmentsCount, setDepartmentsCount] = useState(0);
  const [coursesCount, setCoursesCount] = useState(0);

  useEffect(() => {
    fetchCounts();
  }, []);

  const fetchCounts = async () => {
    try {
      const [studentsRes, departmentsRes, coursesRes] = await Promise.all([
        axios.get("http://localhost:8080/api/students"),
        axios.get("http://localhost:8080/api/departments"),
        axios.get("http://localhost:8080/api/courses"),
      ]);

      setStudentsCount(studentsRes.data.length);
      setDepartmentsCount(departmentsRes.data.length);
      setCoursesCount(coursesRes.data.length);
    } catch (error) {
      console.error("Error fetching counts:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>

      <div style={{ marginTop: "20px" }}>
        <div>Total Students: {studentsCount}</div>
        <div>Total Departments: {departmentsCount}</div>
        <div>Total Courses: {coursesCount}</div>
      </div>
    </div>
  );
}

export default Dashboard;
