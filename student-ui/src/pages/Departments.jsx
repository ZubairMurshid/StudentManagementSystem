// src/pages/Departments.jsx
import { useEffect, useState } from "react";
import {
  getDepartments,
  createDepartment,
  deleteDepartment,
} from "../services/departmentService";

function Departments() {
  const [departments, setDepartments] = useState([]);
  const [formData, setFormData] = useState({
    departmentName: "",
    hod: "",
  });

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const res = await getDepartments();
      setDepartments(res.data);
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting:", formData);

    if (!formData.departmentName.trim() || !formData.hod.trim()) {
      alert("Please fill all fields");
      return;
    }

    try {
      const payload = {
        departmentName: formData.departmentName.trim(),
        hodName: formData.hod.trim(),
      };

      await createDepartment(payload);
      console.log("Department added successfully");
      fetchDepartments();

      setFormData({ departmentName: "", hod: "" });
    } catch (error) {
      if (error.response) {
        console.error("Backend validation error:", error.response.data);
      } else {
        console.error(error);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDepartment(id);
      fetchDepartments();
    } catch (error) {
      console.error("Error deleting department:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Departments</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="departmentName"
          placeholder="Department Name"
          value={formData.departmentName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="hod"
          placeholder="HOD"
          value={formData.hod}
          onChange={handleChange}
        />

        <button type="submit">Add Department</button>
      </form>

      <hr />

      {/* LIST */}
      {departments.map((dept) => (
        <div key={dept.id} style={{ marginBottom: "15px" }}>
          <p>{dept.departmentName}</p>
          <p>HOD: {dept.hod}</p>
          <button onClick={() => handleDelete(dept.id)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Departments;
