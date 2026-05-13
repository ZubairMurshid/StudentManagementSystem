// src/pages/Enrollments.jsx
import { useEffect, useState } from "react";
import { getStudents } from "../services/studentService";
import { getCourses } from "../services/courseService";
import {
  createEnrollment,
  getEnrollments,
} from "../services/enrollmentService";

function Enrollments() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [formData, setFormData] = useState({
    studentId: "",
    courseId: "",
    semester: "",
    grade: "",
  });

  useEffect(() => {
    fetchStudents();
    fetchCourses();
    fetchEnrollments();
  }, []);

  const fetchStudents = async () => {
    const res = await getStudents();
    setStudents(res.data);
  };

  const fetchCourses = async () => {
    const res = await getCourses();
    setCourses(res.data);
  };

  const fetchEnrollments = async () => {
    const res = await getEnrollments();
    setEnrollments(res.data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.semester.trim() ||
      !formData.studentId ||
      !formData.courseId
    ) {
      alert("Please fill all required fields");
      return;
    }

    try {
      const payload = {
        semester: formData.semester.trim(),
        grade: formData.grade.trim(),
        studentId: Number(formData.studentId), // must be a number
        courseId: Number(formData.courseId), // must be a number
      };

      await createEnrollment(payload);
      console.log("Enrollment successful");

      fetchEnrollments(); // reload the list
      setFormData({ semester: "", grade: "", studentId: "", courseId: "" });
    } catch (error) {
      if (error.response) {
        console.error("Backend validation error:", error.response.data);
        alert("Enrollment failed: " + JSON.stringify(error.response.data));
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Enrollments</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <select
          name="studentId"
          value={formData.studentId}
          onChange={handleChange}
        >
          <option value="">Select Student</option>
          {students.map((s) => (
            <option key={s.id} value={s.id}>
              {s.firstName} {s.lastName}
            </option>
          ))}
        </select>

        <select
          name="courseId"
          value={formData.courseId}
          onChange={handleChange}
        >
          <option value="">Select Course</option>
          {courses.map((c) => (
            <option key={c.id} value={c.id}>
              {c.courseName}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="semester"
          placeholder="Semester"
          value={formData.semester}
          onChange={handleChange}
        />
        <input
          type="text"
          name="grade"
          placeholder="Grade"
          value={formData.grade}
          onChange={handleChange}
        />

        <button type="submit">Enroll</button>
      </form>

      <hr />

      <h2>Enrollment List</h2>
      {enrollments.map((e) => {
        const student = students.find((s) => s.id === e.studentId);
        const course = courses.find((c) => c.id === e.courseId);

        return (
          <p key={e.id}>
            {student
              ? `${student.firstName} ${student.lastName}`
              : "Unknown Student"}{" "}
            →{course ? course.courseName : "Unknown Course"} →{e.grade || "-"}
          </p>
        );
      })}
    </div>
  );
}

export default Enrollments;
