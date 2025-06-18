import React, { useState } from 'react';
import './Login.css';
import { FcGoogle } from 'react-icons/fc';   // Colored Google icon
import { FaApple } from 'react-icons/fa';   // Apple icon


const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'user@example.com' && password === '123456') {
      onLogin();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="left-pane">
        <h1 className="board-text">Board.</h1>
      </div>
      <div className="right-pane">
        <h2 className="login-title">Sign In</h2>
        <p className="login-subtitle">Sign in to your account</p>

        <div className="social-buttons">
  <button className="social-btn">
    <FcGoogle className="social-icon" />
    <span>Sign in with Google</span>
  </button>
  <button className="social-btn">
    <FaApple className="social-icon" />
    <span>Sign in with Apple</span>
  </button>
</div>


        <form className="login-form" onSubmit={handleSubmit}>
          <label>Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="signin-btn">Sign In</button>
        </form>
        <p className="register-text">Don’t have an account? <a href="">Register here</a></p>
      </div>
    </div>
  );
};

export default Login;
