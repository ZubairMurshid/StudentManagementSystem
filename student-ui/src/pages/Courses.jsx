// src/pages/Courses.jsx
import { useEffect, useState } from "react";
import { getCourses, createCourse, deleteCourse } from "../services/courseService";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    courseName: "",
    courseCode: "",
    credits: "",
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await getCourses();
      setCourses(res.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting course:", formData);

    if (!formData.courseName.trim() || !formData.courseCode.trim() || !formData.credits) {
      alert("Please fill all fields");
      return;
    }

    try {
      const payload = {
        courseName: formData.courseName.trim(),
        courseCode: formData.courseCode.trim(),
        credits: Number(formData.credits),
      };

      await createCourse(payload);
      console.log("Course added successfully");
      fetchCourses();
      setFormData({ courseName: "", courseCode: "", credits: "" });
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
      await deleteCourse(id);
      fetchCourses();
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Courses</h1>

      {/* Add Course Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="courseName"
          placeholder="Course Name"
          value={formData.courseName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="courseCode"
          placeholder="Course Code"
          value={formData.courseCode}
          onChange={handleChange}
        />

        <input
          type="number"
          name="credits"
          placeholder="Credits"
          value={formData.credits}
          onChange={handleChange}
        />

        <button type="submit">Add Course</button>
      </form>

      <hr />

      {/* Course List */}
      {courses.map((course) => (
        <div key={course.id} style={{ marginBottom: "15px" }}>
          <p>
            {course.courseName} ({course.courseCode}) - {course.credits} credits
          </p>
          <button onClick={() => handleDelete(course.id)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Courses;