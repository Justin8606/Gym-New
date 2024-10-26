// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const BookingView = () => {
//     const [bookings, setBookings] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         const fetchBookings = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8080/bookings'); // Update with your actual endpoint
//                 setBookings(response.data);
//                 setLoading(false);
//             } catch (err) {
//                 setError('Failed to fetch bookings');
//                 setLoading(false);
//             }
//         };

//         fetchBookings();
//     }, []);

//     return (
//         <div className="container">
//             <h2 className="mt-4">Booking List</h2>
//             {loading && <p>Loading bookings...</p>}
//             {error && <p className="text-danger">{error}</p>}
//             {!loading && !error && bookings.length === 0 && <p>No bookings found.</p>}
//             {!loading && !error && bookings.length > 0 && (
//                 <table className="table table-striped mt-3">
//                     <thead>
//                         <tr>
//                             <th scope="col">#</th>
//                             <th scope="col">User ID</th>
//                             <th scope="col">Gym ID</th>
//                             <th scope="col">Booking Date</th>
//                             <th scope="col">Time Slot</th>
//                             <th scope="col">Status</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {bookings.map((booking, index) => (
//                             <tr key={booking._id}>
//                                 <th scope="row">{index + 1}</th>
//                                 <td>{booking.userId}</td>
//                                 <td>{booking.gymId}</td>
//                                 <td>{new Date(booking.date).toLocaleDateString()}</td>
//                                 <td>{booking.timeSlot}</td>
//                                 <td>{booking.status}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default BookingView;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const AdminBookingDashboard = () => {
//   const [bookings, setBookings] = useState([]);

//   // Fetch all bookings from the backend
//   const fetchBookings = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/bookings");
//       setBookings(response.data.bookings); // Assume the API returns a list of bookings
//     } catch (error) {
//       console.error("Error fetching bookings", error);
//     }
//   };

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   return (
//     <div className="container mt-5">
//       <h2>All Gym Bookings</h2>

//       {/* Simple Table of Bookings */}
//       <table className="table table-striped mt-3">
//         <thead>
//           <tr>
//             <th>Booking ID</th>
//             <th>User</th>
//             <th>Gym</th>
//             <th>Date</th>
//             <th>Time</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.length > 0 ? (
//             bookings.map((booking) => (
//               <tr key={booking._id}>
//                 <td>{booking._id}</td>
//                 <td>{booking.user.name}</td>
//                 <td>{booking.gym.name}</td>
//                 <td>{new Date(booking.date).toLocaleDateString()}</td>
//                 <td>{booking.time}</td>
//                 <td>{booking.status}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6" className="text-center">
//                 No bookings found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminBookingDashboard;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const BookingView = () => {
//   const [bookings, setBookings] = useState([]);

//   // Fetch all bookings from the backend
//   const fetchBookings = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/bookings");
//       setBookings(response.data.bookings);
//     } catch (error) {
//       console.error("Error fetching bookings", error);
//     }
//   };

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   return (
    
//     <div className="container mt-5">
//         <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Admin</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNav">
//       <ul class="navbar-nav">
//         <li class="nav-item ">
//           <a class="nav-link" href="/admin-home">Home</a>
//         </li>
//         <li class="nav-item active">
//           <a class="nav-link" href="/view-booking">Bookings</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="/">logout</a>
//         </li>
        
//       </ul>
//     </div>
//   </div>
// </nav>
//       <h2>All Gym Bookings</h2>
//       <table className="table table-striped mt-3">
//         <thead>
//           <tr>
//             <th>Booking ID</th>
//             <th>User</th>
//             <th>Gym</th>
//             <th>Date</th>
//             <th>Time</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.length > 0 ? (
//             bookings.map((booking) => (
//               <tr key={booking._id}>
//                 <td>{booking._id}</td>
//                 <td>{booking.userId.name}</td>
//                 <td>{booking.gymId.name}</td>
//                 <td>{new Date(booking.bookingDate).toLocaleDateString()}</td>
//                 <td>{booking.timeSlot}</td>
//                 <td>{booking.status}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6" className="text-center">
//                 No bookings found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BookingView;


import React, { useEffect, useState } from "react";
import axios from "axios";

const BookingView = () => {
  const [bookings, setBookings] = useState([]);

  // Fetch all bookings from the backend
  const fetchBookings = async () => {
    try {
      const response = await axios.get("http://localhost:8080/bookings");
      setBookings(response.data.bookings);
    } catch (error) {
      console.error("Error fetching bookings", error);
    }
  };

  // const fetchBookings = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:8080/bookings");
  //     // Sort bookings by booking date in descending order (newest first)
  //     const sortedBookings = response.data.bookings.sort(
  //       (a, b) => new Date(b.bookingDate) - new Date(a.bookingDate)
  //     );
  //     setBookings(sortedBookings);
  //   } catch (error) {
  //     console.error("Error fetching bookings", error);
  //   }      //if you want to show the gym booking in sorting order of dates.
  // };
  

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="container mt-5">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Admin</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/admin-home">Home</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/view-booking">Bookings</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <h2>All Gym Bookings</h2>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>User</th>
            <th>Gym</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking._id}</td>
                <td>{booking.userId ? booking.userId.name : "User not found"}</td>
                <td>{booking.gymId ? booking.gymId.name : "Gym not found"}</td>
                <td>{new Date(booking.bookingDate).toLocaleDateString()}</td>
                <td>{booking.timeSlot}</td>
                <td>{booking.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No bookings found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookingView;
