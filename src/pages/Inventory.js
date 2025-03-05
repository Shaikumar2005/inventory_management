import React from "react";
import { useNavigate } from "react-router-dom";
import "./inventory.css"; // Make sure the file name matches exactly

const Inventory = () => {
  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate("/add-product"); // Update the route as per your setup
  };

  return (
    <div className="inventory-container">
      <h2 className="inventory-title">Inventory Management</h2>

      <button onClick={handleAddProduct} className="add-product-btn">
        Add New Product
      </button>

      {/* Example: Add your inventory list/table here */}
      <div className="inventory-list">
        <p>No products added yet.</p>
      </div>
    </div>
  );
};

export default Inventory;
