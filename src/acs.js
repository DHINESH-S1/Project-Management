import React, { useState } from 'react';
import { styled } from '@mui/system';

const ServiceItem = styled('div')({
  backgroundColor: 'yellow',
  padding: '20px',
  marginBottom: '15px',
  borderRadius: '8px',
});

const ServiceName = styled('h3')({
  fontSize: '1.5rem',
  marginBottom: '10px',
  color: '#333',
});

const ServicePrice = styled('p')({
  color: '#555',
  marginBottom: '15px',
});

const AddToCartBtn = styled('button')({
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '8px 16px',
  borderRadius: '5px',
  cursor: 'pointer',
  border: 'none',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
});

const ACServiceRepairPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (service) => {
    setCart([...cart, service]);
  };

  const services = [
    { id: 1, name: 'AC Checkup', price: 59.99 },
    { id: 2, name: 'AC Gas Refill', price: 89.99 },
    { id: 3, name: 'AC Compressor Replacement', price: 199.99 },
    // Add more services as needed
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#007bff' }}>AC Service & Repair</h1>
      <div>
        {services.map((service) => (
          <ServiceItem key={service.id}>
            <ServiceName>{service.name}</ServiceName>
            <ServicePrice>Price: ${service.price}</ServicePrice>
            <AddToCartBtn onClick={() => addToCart(service)}>Add to Cart</AddToCartBtn>
          </ServiceItem>
        ))}
      </div>

      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '15px', color: '#333' }}>Shopping Cart</h2>
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

export default ACServiceRepairPage;
