
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import CoachDetail from "./components/coachingDetails/CoachDetail";
import Courses from "./components/coachingDetails/Courses";

function App() {
  return (
    <div>
        <Routes>
          
          <Route path="/" element={<Login />} />
          <Route path="/CoachDetail" element={<CoachDetail />} />
          <Route path="/Courses" element={<Courses />} />
          
        </Routes>

      
    </div>
  );
}

export default App;
