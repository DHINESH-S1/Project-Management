import React, { useState } from 'react';

const TireWheelCarePage = () => {
  const [cart, setCart] = useState([]);

  // Function to handle adding an item to the cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Sample tire and wheel care products
  const products = [
    { id: 1, name: 'Tire Shine Spray', price: 12.99 },
    { id: 2, name: 'Wheel Cleaner', price: 9.99 },
    { id: 3, name: 'Tire Pressure Gauge', price: 14.49 },
    // Add more products as needed
  ];

  return (
    <div>
      <h1>Tire and Wheel Care Products</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <hr />
          </div>
        ))}
      </div>

      {/* Display the cart */}
      <div>
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TireWheelCarePage;
