import { useState } from 'react';
import ProductCard from './components/ProductCard';
import './App.css';

function App() {
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: '129.99',
      stockStatus: 'In Stock',
      image: null
    },
    {
      id: 2,
      name: 'Mechanical Keyboard',
      price: '89.99',
      stockStatus: 'Out of Stock',
      image: null
    },
    {
      id: 3,
      name: 'Smart Watch',
      price: '199.99',
      stockStatus: 'In Stock',
      image: null
    }
  ];

  return (
    <div className="App">
      <div className="container">
        <h1 className="app-title">Product Catalog</h1>
<div className="product-grid">{products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              stockStatus={product.stockStatus}
              image={product.image}/>
          ))}</div>
      </div></div>
  );
}

export default App;
