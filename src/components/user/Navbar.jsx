// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = ({ notifications, user }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userId");
//     navigate("/");
//   };

//   return (
//     <nav className="navbar">
//       <Link to="/" className="navbar-logo">
//         GymConnect
//       </Link>
//       <div className="navbar-links">
//         <Link to="/home">Home</Link>
//         <Link to="/profile">Profile</Link>
//         <Link to="/bookings">My Bookings</Link>
//       </div>

//       <div className="navbar-right">
//         {/* Notifications Dropdown */}
//         <div className="notification-bell">
//           <i className="fa fa-bell"></i>
//           {notifications.length > 0 && <span className="notification-count">{notifications.length}</span>}
//           <div className="notification-dropdown">
//             {notifications.length > 0 ? (
//               notifications.map((notification, index) => (
//                 <div key={index} className="notification-item">
//                   {notification.message}
//                 </div>
//               ))
//             ) : (
//               <p>No notifications</p>
//             )}
//           </div>
//         </div>

//         {/* User Greeting and Logout */}
//         <div className="user-menu">
//           <p>Welcome, {user.name}</p>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// Navbar.jsx
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed mb-4">
//       <div className="container">
//         <Link className="navbar-brand" to="/home">
//           Gym-Connect
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/about">
//                 About
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/contact">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//           <button
//             className="btn btn-outline-primary my-2 my-sm-0"
//             onClick={() => navigate("/profile")}
//             style={{
//               borderRadius: "25px",
//               padding: "5px 20px",
//               fontWeight: "bold",
//             }}
//           >
//             Profile
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// Fix the Navbar at the top of every page.
// Align the Profile Button to the right end.
// Add a Notification Badge at the top-right of the Profile button


// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Navbar.css"; // Create a CSS file if not created

// const Navbar = () => {
//   const navigate = useNavigate();
//   const notificationCount = 3; // Example count; replace with dynamic value if needed

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
//       <div className="container">
//         {/* Brand */}
//         <Link className="navbar-brand" to="/home">
//           Gym-Connect
//         </Link>

//         {/* Navbar Toggler */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navbar Links */}
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/about">
//                 About
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/contact">
//                 Contact
//               </Link>
//             </li>
//           </ul>

//           {/* Profile Button with Notification Badge */}
//           <div className="profile-container">
//             <button
//               className="btn btn-outline-primary profile-btn"
//               onClick={() => navigate("/profile")}
//               style={{
//                 borderRadius: "25px",
//                 padding: "5px 20px",
//                 fontWeight: "bold",
//               }}
//             >
//               Profile
//             </button>
//             {notificationCount > 0 && (
//               <span className="notification-badge">{notificationCount}</span>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ notificationCount }) => { // Accept notificationCount as a prop
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand" to="/home">
          Gym-Connect
        </Link>

        {/* Navbar Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          {/* Profile Button with Notification Badge */}
          <div className="profile-container">
            <button
              className="btn btn-outline-primary profile-btn"
              onClick={() => navigate("/profile")}
              style={{
                borderRadius: "25px",
                padding: "5px 20px",
                fontWeight: "bold",
              }}
            >
              Profile
            </button>
            {notificationCount > 0 && (
              <span className="notification-badge">{notificationCount}</span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
