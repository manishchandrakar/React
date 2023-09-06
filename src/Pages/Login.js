import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import the Link component
import '../Style/login.css'; // Import the CSS module styles for the login
import axios from 'axios';



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
       const res = await axios.post('http://localhost:8000/login',{
        email,password
       });

       navigate('/');
    } catch (e) {
       console.log("not running", e);
    }
    

  };

  return (
    <div className="login-container">
      <h2 className="login-header">Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <button type="submit" className="btn-register">Register</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}

export default Login;
