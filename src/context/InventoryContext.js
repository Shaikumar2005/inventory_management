import { createContext, useState } from "react";

// Creating the Inventory Context
export const InventoryContext = createContext();

// Provider Component
export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState([]); // Store products

  // Function to add product
  const addProduct = (product) => {
    setInventory([...inventory, product]);
  };

  return (
    <InventoryContext.Provider value={{ inventory, addProduct }}>
      {children}
    </InventoryContext.Provider>
  );
};
