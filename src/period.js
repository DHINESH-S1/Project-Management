import React, { useState } from 'react';

const PeriodicServicesPage = () => {
  const [cart, setCart] = useState([]);

  // Function to handle adding a service to the cart
  const addToCart = (service) => {
    setCart([...cart, service]);
  };

  // Sample periodic services
  const services = [
    { id: 1, name: 'Oil Change', price: 49.99 },
    { id: 2, name: 'Brake Inspection', price: 39.99 },
    { id: 3, name: 'Filter Replacement', price: 29.99 },
    // Add more services as needed
  ];

  return (
    <div>
      <h1>Periodic Services</h1>
      <div>
        {services.map((service) => (
          <div key={service.id}>
            <h3>{service.name}</h3>
            <p>Price: ${service.price}</p>
            <button onClick={() => addToCart(service)}>Add to Cart</button>
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

export default PeriodicServicesPage;
