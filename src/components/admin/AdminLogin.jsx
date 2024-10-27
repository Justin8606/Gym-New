// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import "./AdminLogin.css"

// const AdminLogin = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
  
//     const navigate = useNavigate();
  
//     // Hardcoded credentials for the admin
//     const adminCredentials = {
//       username: 'admin',
//       password: 'admin123', // You can set a secure password
//     };
  
//     const handleLogin = (e) => {
//       e.preventDefault();
//       if (username === adminCredentials.username && password === adminCredentials.password) {
//         // If credentials match, redirect to the admin dashboard
//         navigate('/admin-home');
//       } else {
//         setError('Invalid username or password');
//       }
//     };
//   return (
//     <div className="login-container">
//       <h2>Admin Login</h2>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   )
// }

// export default AdminLogin


//design focused

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import './AdminLogin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // Hardcoded credentials for the admin
  const adminCredentials = {
    username: 'admin',
    password: 'admin123', // Set a secure password
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === adminCredentials.username && password === adminCredentials.password) {
      navigate('/admin-home'); // Redirect to admin dashboard
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="admin-login-container">
      {/* Left Side: Caption and Image */}
      <div className="admin-left-section">
        <img src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Admin Access" className="admin-image" />
        <h1 className="admin-caption">Welcome, Admin</h1>
        <p className="admin-description">
          Access the GymConnect admin dashboard to manage gyms, monitor bookings, and ensure a seamless experience for users.
        </p>
      </div>

      {/* Right Side: Login Form */}
      <div className="admin-right-section">
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
        <p className="center-link">
            Already have an account? <Link to="/">Go to Login page</Link>
          </p>
      </div>
    </div>
  );
};

export default AdminLogin;
