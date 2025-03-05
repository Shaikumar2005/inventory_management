import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/inventory">Inventory</Link></li>
        <li><Link to="/add-product">Add Product</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
