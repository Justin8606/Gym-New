import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./AdminLogin.css"

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const navigate = useNavigate();
  
    // Hardcoded credentials for the admin
    const adminCredentials = {
      username: 'admin',
      password: 'admin123', // You can set a secure password
    };
  
    const handleLogin = (e) => {
      e.preventDefault();
      if (username === adminCredentials.username && password === adminCredentials.password) {
        // If credentials match, redirect to the admin dashboard
        navigate('/admin-home');
      } else {
        setError('Invalid username or password');
      }
    };
  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default AdminLogin