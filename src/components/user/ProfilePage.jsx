// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./ProfilePage.css";

// const ProfilePage = () => {
//   const [user, setUser] = useState({});
//   const [notifications, setNotifications] = useState([]);
//   const userId = "6718507ff85eb5bcc793e269"; // Replace with actual user ID from context or auth

//   // Fetch user details and notifications
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const userResponse = await axios.get(`http://localhost:8080/users/${userId}`);
//         if (userResponse.data.status === "success") {
//           setUser(userResponse.data.user);
//         }

//         const notificationsResponse = await axios.get("http://localhost:8080/notifications");
//         if (notificationsResponse.data.status === "success") {
//           setNotifications(notificationsResponse.data.notifications);
//         }
//       } catch (error) {
//         console.error("Error fetching user data or notifications:", error);
//       }
//     };

//     fetchUserData();
//   }, [userId]);

//   return (
//     <div className="profile-page">
//       {/* Left section: User details */}
//       <div className="profile-left">
//         <h2>User Profile</h2>
//         <p><strong>Name:</strong> {user.name}</p>
//         <p><strong>Email:</strong> {user.email}</p>
//         {/* Additional user details can be added here */}
//       </div>

//       {/* Right section: Notifications */}
//       <div className="profile-right">
//         <div className="top-right-info">
//           <div className="user-name-box">
//             <p>{user.name}</p>
//           </div>
//           <div className="profile-icon">
//             Profile
//             {notifications.length > 0 && (
//               <span className="notification-count">{notifications.length}</span>
//             )}
//           </div>
//         </div>
//         <div className="notifications-container">
//           <h3>Notifications</h3>
//           {notifications.length > 0 ? (
//             notifications.map((notification, index) => (
//               <div key={index} className="notification-item">
//                 {notification.message}
//               </div>
//             ))
//           ) : (
//             <p>No notifications</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./ProfilePage.css";

// const ProfilePage = () => {
//   const [user, setUser] = useState({});
//   const [notifications, setNotifications] = useState([]);
//   const navigate = useNavigate();

//   // Function to handle logout
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userId");
//     navigate("/");
//   };

//   const handleback = () =>{
//     navigate("/home");
//   }

//   // Fetch user details and notifications
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const userId = localStorage.getItem("userId");

//     if (!token || !userId) {
//       navigate("/");
//       return;
//     }

//     const fetchUserData = async () => {
//       try {
//         // Fetch user data with userId
//         const userResponse = await axios.get(`http://localhost:8080/users/${userId}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         if (userResponse.data.status === "success") {
//           setUser(userResponse.data.user);
//         }

//         // Fetch notifications
//         const notificationsResponse = await axios.get("http://localhost:8080/notifications", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         if (notificationsResponse.data.status === "success") {
//           setNotifications(notificationsResponse.data.notifications);
//         }
//       } catch (error) {
//         console.error("Error fetching user data or notifications:", error);
//       }
//     };

//     fetchUserData();
//   }, [navigate]);

//   return (
//     <div className="profile-page">
//       {/* Left section: User details */}
//       <div className="profile-left">
//         <h2>User Profile</h2>
//         <p><strong>Name:</strong> {user.name}</p>
//         <p><strong>Email:</strong> {user.email}</p>
//         <button className="back-button" onClick={handleback}>back</button>
//       </div>

//       {/* Right section: Notifications */}
//       <div className="profile-right">
//         <div className="top-right-info">
//           <div className="user-name-box">
//             <p className="nameof">{user.name}</p>
//           </div>
//           <button className="logout-button" onClick={handleLogout}>
//             Logout
//           </button>
          
//         </div>
//         <div className="notifications-container">
//           <h3>Notifications</h3>
//           {notifications.length > 0 ? (
//             notifications.map((notification, index) => (
//               <div key={index} className="notification-item">
//                 {notification.message}
//               </div>
//             ))
//           ) : (
//             <p>No notifications</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import "./ProfilePage.css";

// const ProfilePage = () => {
//   const [user, setUser] = useState({});
//   const [notifications, setNotifications] = useState([]);
//   const [bookings, setBookings] = useState([]);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userId");
//     navigate("/");
//   };

//   const handleBack = () => {
//     navigate("/home");
//   };

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const userId = localStorage.getItem("userId");

//     if (!token || !userId) {
//       navigate("/");
//       return;
//     }

//     const fetchUserData = async () => {
//       try {
//         const userResponse = await axios.get(`http://localhost:8080/users/${userId}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         if (userResponse.data.status === "success") {
//           setUser(userResponse.data.user);
//         }

//         const bookingResponse = await axios.get(`http://localhost:8080/bookings/${userId}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         if (bookingResponse.data.status === "success") {
//           setBookings(bookingResponse.data.bookings);
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchUserData();
//   }, [navigate]);

//   return (
    

//     <div className="profile-page">
        
//       {/* Left section: User details */}
      
//       <div className="profile-left">
//         <h2>User Profile</h2>
//         <p><strong>Name:</strong> {user.name}</p>
//         <p><strong>Email:</strong> {user.email}</p>
//         <button className="back-button" onClick={handleBack}>Back</button>

//         {/* My Bookings section */}
//         <h3>My Bookings</h3>
//         {bookings.length > 0 ? (
//           <div className="bookings-list">
//             {bookings.map((booking) => (
//               <Link to={`/gyms/${booking.gymId._id}`} key={booking._id} className="gym-link">
//                 <div className="card h-100 mb-4">
//                   {booking.gymId.images && booking.gymId.images.length > 0 && (
//                     <img
//                       src={booking.gymId.images[0]}
//                       alt={booking.gymId.name}
//                       className="card-img-top"
//                       style={{ maxHeight: "200px", objectFit: "cover" }}
//                     />
//                   )}
//                   <div className="card-body">
//                     <h5 className="card-title">{booking.gymId.name}</h5>
//                     <p className="card-text"><strong>Location:</strong> {booking.gymId.location}</p>
//                     <p className="card-text"><strong>Price:</strong> ${booking.gymId.price}</p>
//                     <p className="card-text"><strong>Booking Date:</strong> {new Date(booking.bookingDate).toLocaleDateString()}</p>
//                     <p className="card-text"><strong>Time Slot:</strong> {booking.timeSlot}</p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <p>No bookings found.</p>
//         )}
//       </div>

//       {/* Right section: Notifications */}
//       <div className="profile-right">
//         <div className="top-right-info">
//           <div className="user-name-box">
//             <p className="nameof">{user.name}</p>
//           </div>
//           <button className="logout-button" onClick={handleLogout}>Logout</button>
//         </div>
//         <div className="notifications-container">
//           <h3>Notifications</h3>
//           {notifications.length > 0 ? (
//             notifications.map((notification, index) => (
//               <div key={index} className="notification-item">
//                 {notification.message}
//               </div>
//             ))
//           ) : (
//             <p>No notifications</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;

//above notification was not there at all after below code notification is working


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [user, setUser] = useState({});
  const [notifications, setNotifications] = useState([]);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/");
  };

  const handleBack = () => {
    navigate("/home");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (!token || !userId) {
      navigate("/");
      return;
    }

    const fetchUserData = async () => {
      try {
        // Fetch user details
        const userResponse = await axios.get(`http://localhost:8080/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (userResponse.data.status === "success") {
          setUser(userResponse.data.user);
        }

        // Fetch user bookings
        const bookingResponse = await axios.get(`http://localhost:8080/bookings/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (bookingResponse.data.status === "success") {
          setBookings(bookingResponse.data.bookings);
        }

        // Fetch user notifications
        const notificationResponse = await axios.get(`http://localhost:8080/notifications/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (notificationResponse.data.status === "success") {
          setNotifications(notificationResponse.data.notifications);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserData();
  }, [navigate]);

  return (
    <div className="profile-page">
      {/* Left section: User details */}
      <div className="profile-left">
        <h2>User Profile</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <button className="back-button" onClick={handleBack}>Back</button>

        {/* My Bookings section */}
        <h3>My Bookings</h3>
        {bookings.length > 0 ? (
          <div className="bookings-list">
            {bookings.map((booking) => (
              <Link to={`/gyms/${booking.gymId._id}`} key={booking._id} className="gym-link">
                <div className="card h-100 mb-4">
                  {booking.gymId.images && booking.gymId.images.length > 0 && (
                    <img
                      src={booking.gymId.images[0]}
                      alt={booking.gymId.name}
                      className="card-img-top"
                      style={{ maxHeight: "200px", objectFit: "cover" }}
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{booking.gymId.name}</h5>
                    <p className="card-text"><strong>Location:</strong> {booking.gymId.location}</p>
                    <p className="card-text"><strong>Price:</strong> ${booking.gymId.price}</p>
                    <p className="card-text"><strong>Booking Date:</strong> {new Date(booking.bookingDate).toLocaleDateString()}</p>
                    <p className="card-text"><strong>Time Slot:</strong> {booking.timeSlot}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p>No bookings found.</p>
        )}
      </div>

      {/* Right section: Notifications */}
      <div className="profile-right">
        <div className="top-right-info">
          <div className="user-name-box">
            <p className="nameof">{user.name}</p>
          </div>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
        <div className="notifications-container">
          <h3>Notifications</h3>
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
    </div>
  );
};

export default ProfilePage;

