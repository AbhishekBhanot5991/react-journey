import { useState } from "react";

import "./App.css";

function App() {
  const products = [
    { title: "Milk", drinkable: true, id: 1 },
    { title: "MilkBadam", drinkable: true, id: 2 },
    { title: "Burfi", drinkable: false, id: 3 },
    { title: "Chesse", drinkable: false, id: 4 },
  ];

  const listItems = products.map((product) => (
    <li key={product.id} style={{ color: product.drinkable ? "Green" : "red" }}>
      {product.title}
    </li>
  ));

  return <>{listItems}</>;
}

export default App;
