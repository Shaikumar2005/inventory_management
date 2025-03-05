import React, { useState } from "react";
import "./AddProduct.css";

const AddProduct = () => {
  // State to store input values
  const [product, setProduct] = useState({
    name: "",
    price: "",
    sku: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Data:", product);
    // You can add API call here to send data to backend
  };

  return (
    <div className="add-product-container">
      <h2>Add Product</h2>
      <div className="form-container">
        <input
          type="text"
          name="name"
          placeholder="Enter product name"
          value={product.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Enter product price"
          value={product.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="sku"
          placeholder="Enter SKU"
          value={product.sku}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Add Product</button>
      </div>
    </div>
  );
};

export default AddProduct;
