import { useEffect, useState } from "react";
import {
  getStudents,
  createStudent,
  deleteStudent,
  updateStudent,
} from "../services/studentService";

import { getDepartments } from "../services/departmentService";



function Students() {
  const [students, setStudents] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [departments, setDepartments] = useState([]);

  const fetchDepartments = async () => {
    const response = await getDepartments(); // import this from departmentService
    setDepartments(response.data);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    departmentId: "",
  });

  useEffect(() => {
    fetchStudents();
    fetchDepartments();
  }, []);

  const fetchStudents = async () => {
    const response = await getStudents();
    setStudents(response.data);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = (student) => {
    setEditingId(student.id);
    setFormData({
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email,
      gender: student.gender,
      departmentId: student.department?.id || "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await updateStudent(editingId, formData);
    } else {
      await createStudent(formData);
    }

    fetchStudents();

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      departmentId: "",
    });

    setEditingId(null);
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    fetchStudents();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Students</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="gender"
          placeholder="Gender"
          value={formData.gender}
          onChange={handleChange}
        />

        <select
          name="departmentId"
          value={formData.departmentId}
          onChange={handleChange}
        >
          <option value="">Select Department</option>
          {departments.map((dept) => (
            <option key={dept.id} value={dept.id}>
              {dept.departmentName}
            </option>
          ))}
        </select>

        <button type="submit">
          {editingId ? "Update Student" : "Add Student"}
        </button>
      </form>

      <hr />

      {students.map((student) => (
        <div key={student.id}>
          <p>
            {student.firstName} {student.lastName}
          </p>

          <p>{student.email}</p>

          <button onClick={() => handleEdit(student)}>Edit</button>

          <button onClick={() => handleDelete(student.id)}>Delete</button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Students;
