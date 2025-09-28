import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./Pages/DashBoard"; 
import Teacher_Profile from './Pages/Teacher_Profile';
import Assignment from './Pages/Assignment'
import Verification from "./Pages/Verification";
import Report from "./Pages/Report";
import BottomNav from "./components/BottomNav";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/profile" element={<Teacher_Profile />} />
        <Route path="/assignments" element={<Assignment />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/reports" element={<Report />} />
      </Routes>
      <BottomNav />
    </BrowserRouter>
  );
}
