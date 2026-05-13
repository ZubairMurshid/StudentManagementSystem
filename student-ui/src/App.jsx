import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Departments from "./pages/Departments";
import Enrollments from "./pages/Enrollments";
import Courses from "./pages/Courses";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Modern Navbar */}
        <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
          <h1 className="text-xl font-bold text-blue-600 tracking-tight">
            StudentMS
          </h1>
          <div className="flex gap-6">
            {[
              "Dashboard",
              "Students",
              "Departments",
              "Enrollments",
              "Courses",
            ].map((item) => (
              <Link
                key={item}
                to={item === "Dashboard" ? "/" : `/${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </nav>

        {/* Main Application Area */}
        <main className="flex-1 max-w-7xl mx-auto w-full p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/enrollments" element={<Enrollments />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
