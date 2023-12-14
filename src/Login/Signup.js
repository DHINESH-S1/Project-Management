import React, { useState } from 'react';
import './Login.css';
import userIcon from './Assets/person.png';
import emailIcon from './Assets/email.png';
import passwordIcon from './Assets/password.png';

export const Signup = () => {
  const [action, setAction] = useState("Login");

  const toggleAction = () => {
    setAction((prevAction) => (prevAction === "Login" ? "Sign Up" : "Login"));
  };

  const handleSubmit = () => {
    if (action === "Login") {
      alert('Login successful!');
    } else {
      alert('Form submitted');
    }
  };

  return (
    <div className="container" style={{ backgroundImage: 'url("path/to/your/background.jpg")' }}>
      <div className="content">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          {action === "Login" ? null : (
            <div className="input">
              <img src={userIcon} alt="" />
              <input type="text" placeholder="Name" required />
            </div>
          )}
          <div className="input">
            <img src={emailIcon} alt="" />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input">
            <img src={passwordIcon} alt="" />
            <input type="password" placeholder="Password" required />
          </div>
        </div>

        {action === "Login" ? null : (
          <div className="forget-password">
            Lost Password?<span>Click Here</span>
          </div>
        )}

        <div className="submit-continer">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={toggleAction}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              toggleAction();
              handleSubmit();
            }}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};
