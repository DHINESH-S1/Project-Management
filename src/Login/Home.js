import React from 'react';
import NavBar from './Navbar';
import Footer from './Footer';
import Setting from './sett';
const Home = () => {
  return (
  <div style={{
    backgroundColor:'grey'
  }}>
      <NavBar />
      <div style={{ padding: '1rem', 
                    backgroundColor:''}}>
        <section style={{ marginTop: '80px' }}>
          {/* Content after the navbar */}

          <h2>Welcome to Our Vehicle Service Booking Website</h2>
          <p><b>
          <i>Welcome to our premier vehicle service booking platform! At GoMechanic, we pride ourselves on delivering exceptional automotive care tailored to your needs. Our dedicated team of professionals is committed to ensuring your vehicle receives top-quality maintenance, repairs, and servicing. With a seamless online booking system, we offer convenience at your fingertips, allowing you to schedule appointments effortlessly. From routine check-ups to complex repairs, we've got you covered. Experience reliability and expertise as we prioritize your safety and satisfaction. Your journey with us involves cutting-edge technology, skilled mechanics, and a customer-centric approach, ensuring every ride is smooth and worry-free. Trust us to keep your vehicle performing at its best. Join our community of satisfied customers and embark on a hassle-free experience in vehicle servicing. Welcome aboard, where exceptional service meets unparalleled convenience!          </i></b>
          </p>
          {/* Add more content as needed */}
        </section>
      </div>
      <Setting/>
      <Footer />
    </div>
  );
};
export default Home;
