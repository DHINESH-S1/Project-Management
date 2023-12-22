import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from './Login/Home';
import Login from './Login/Login';
import SignUp from './Login/Signup';
import ContactUs from './Login/Contact';


function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <Navigate to="/home" replace={true} />;
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route
            path="/navigate"
            element={
              <Navigate
                to="/login"
                replace={true}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

