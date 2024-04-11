import React, { useState } from "react";

export default function Filter() {
  const [products, setProducts] = useState([
    { name: "Camiseta", price: 20 },
    { name: "Zapatos", price: 50 },
    { name: "Pantalón", price: 30 },
  ]);
  const [searchText, setSearchText] = useState("");

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <div>
      <input type="text" placeholder="Buscar producto" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.name}>
            <h2>{product.name}</h2>
            <p>{product.price} €</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
