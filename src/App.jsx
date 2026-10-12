import { Navigate, Route, Routes } from "react-router-dom";
import StaffSidebar from "./components/StaffSidebar";
import StaffDashboard from "./components/StaffDashboard";
import OccupancyDashboard from "./components/OccupancyDashboard";
import ProfileDashboard from "./components/ProfileDashboard";

function App() {
  return (
    <div className="min-h-screen bg-[#e9edf7]">
      <StaffSidebar />
      <Routes>
        <Route path="/" element={<Navigate to="/facility" replace />} />
        <Route path="/facility" element={<StaffDashboard />} />
        <Route path="/occupancy" element={<OccupancyDashboard />} />
        <Route
          path="/history"
          element={
            <main className="ml-49.5 min-h-screen bg-[#e9edf7] p-6 max-sm:ml-0">
              <h1 className="text-[20px] font-bold text-[#273556]">History</h1>
              <p className="mt-1 text-[11px] text-[#8290aa]">
                Activity history is not available yet.
              </p>
            </main>
          }
        />
        <Route path="/profile" element={<ProfileDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
