import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Inventory from "../pages/Inventory";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";
import AddProduct from "../pages/ AddProduct"; // Ensure correct path


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default AppRoutes;
