import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Inventory Management</div>
      <ul className="nav-links">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/inventory">Inventory</Link></li>
        <li><Link to="/add-product">Add Product</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
