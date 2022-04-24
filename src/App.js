
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import CoachDetail from "./components/coachingDetails/CoachDetail";
import Courses from "./components/courses/Courses";
import CoursesDetail from "./components/courses/CoursesDetail";

function App() {
  return (
    <div>
        <Routes>
          
          <Route path="/" element={<Login />} />
          <Route path="/CoachDetail" element={<CoachDetail />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/CoursesDetail" element={<CoursesDetail />} />
          
        </Routes>

      
    </div>
  );
}

export default App;
