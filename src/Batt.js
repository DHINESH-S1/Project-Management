import React, { useState } from 'react';

const VehicleBatteriesPage = () => {
  const [cart, setCart] = useState([]);

  // Function to handle adding an item to the cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Sample vehicle batteries products
  const products = [
    { id: 1, name: '12V Car Battery', price: 99.99 },
    { id: 2, name: 'Truck Battery - Heavy Duty', price: 189.99 },
    { id: 3, name: 'Motorcycle Battery', price: 49.99 },
    // Add more products as needed
  ];

  return (
    <div>
      <h1>Vehicle Batteries</h1>
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

export default VehicleBatteriesPage;
