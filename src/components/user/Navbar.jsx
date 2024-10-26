import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ notifications, user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        GymConnect
      </Link>
      <div className="navbar-links">
        <Link to="/home">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/bookings">My Bookings</Link>
      </div>

      <div className="navbar-right">
        {/* Notifications Dropdown */}
        <div className="notification-bell">
          <i className="fa fa-bell"></i>
          {notifications.length > 0 && <span className="notification-count">{notifications.length}</span>}
          <div className="notification-dropdown">
            {notifications.length > 0 ? (
              notifications.map((notification, index) => (
                <div key={index} className="notification-item">
                  {notification.message}
                </div>
              ))
            ) : (
              <p>No notifications</p>
            )}
          </div>
        </div>

        {/* User Greeting and Logout */}
        <div className="user-menu">
          <p>Welcome, {user.name}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
