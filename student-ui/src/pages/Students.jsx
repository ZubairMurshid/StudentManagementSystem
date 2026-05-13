import { useEffect, useState } from "react";
import {
  getStudents,
  createStudent,
  deleteStudent,
} from "../services/studentService";

function Students() {
  const [students, setStudents] = useState([]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
  });

  useEffect(() => {
    fetchStudents();
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createStudent(formData);

    fetchStudents();

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
    });
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

        <button type="submit">Add Student</button>
      </form>

      <hr />

      {students.map((student) => (
        <div key={student.id}>
          <p>
            {student.firstName} {student.lastName}
          </p>

          <p>{student.email}</p>

          <button onClick={() => handleDelete(student.id)}>Delete</button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Students;
