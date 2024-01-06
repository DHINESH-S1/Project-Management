// App.js
import React, { useState } from 'react';
import ServiceList from './ServiceList';
import Cart from './Cart';

const Painting = () => {
  const [cartItems, setCartItems] = useState([]);
  // Example service data
  const services = [
    { id: 1, name: 'Denting', price: 200 },
    { id: 2, name: 'Painting', price: 300 },
    // Add more services here
  ];

  const addToCart = (service) => {
    setCartItems([...cartItems, service]);
  };

  return (
    <div className="app">
      <h1>Vehicle Service Booking</h1>
      <ServiceList services={services} addToCart={addToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default Painting;
