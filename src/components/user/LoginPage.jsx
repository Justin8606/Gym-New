// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './LoginPage.css'; // Assuming you'll create a separate CSS file

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Handle login logic here (e.g., form submission, authentication)

//     console.log('Email:', email);
//     console.log('Password:', password);
    
//     // Redirect to another page after successful login (example)
//     navigate('/dashboard');
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div className="input-container">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="input-container">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       <p className="register-link">
//         Don’t have an account? <a onClick={() => navigate('/register')}>Register here</a>
//       </p>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css'; // Assuming you have a CSS file for styling

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Handle login submission
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send login request to backend
      const response = await axios.post("http://localhost:8080/signin", {
        email,
        password
      });

      if (response.data.status === "success") {
        // Store the token and userId in local storage or session storage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);

        // Navigate to the dashboard (or any other page)
        navigate('/home');
      } else {
        // Display error message
        setErrorMessage(response.data.status);
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("An error occurred while logging in.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-container">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {/* Display error message if login fails */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p className="register-link">
        Don’t have an account? <a onClick={() => navigate('/register')}>Register here</a>
      </p>
      <p className="register-link">
        Admin Login <a onClick={() => navigate('/admin')}>Login here</a>
      </p>
    </div>
  );
};

export default LoginPage;
