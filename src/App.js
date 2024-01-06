import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import TireWheelCarePage from './Tyre';
import VehicleBatteriesPage from './Batt';
import PeriodicServicesPage from './period';
import ACServiceRepairPage from './acs'

import Home from './Login/Home';
import Login from './Login/Login';
import SignUp from './Login/Signup';
import Contact from './contact';
import AboutPage from './Login/about';
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<Home />} />
          <Route path='/Tyre' element={< TireWheelCarePage/>}/>
          <Route path='/Batt' element={< VehicleBatteriesPage/>}/>
          <Route path='/period' element={<PeriodicServicesPage/>}/>
          <Route path='/acs' element={<ACServiceRepairPage/>}/>
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