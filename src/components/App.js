import React, { useState } from "react";
import ShoppingList from "./ShoppingList";

const items = [
  { name: "Yogurt", category: "Dairy" },
  { name: "Pomegranate", category: "Produce" },
  { name: "Lettuce", category: "Produce" },
  { name: "String Cheese", category: "Dairy" },
  { name: "Cookies", category: "Dessert" },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <button onClick={toggleDarkMode}>Toggle Mode</button>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
