// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./BookingPage.css"; // Optional CSS for styling

// const BookingPage = () => {
//   const [userId, setUserId] = useState(""); // State for user ID
//   const [gymId, setGymId] = useState(""); // State for gym ID
//   const [bookingDate, setBookingDate] = useState(""); // State for booking date
//   const [timeSlot, setTimeSlot] = useState(""); // State for time slot
//   const [error, setError] = useState(""); // State for error messages
//   const [success, setSuccess] = useState(""); // State for success messages
//   const navigate = useNavigate(); // Hook to navigate programmatically

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior

//     // Ensure user ID and gym ID are retrieved from local storage
//     const storedUserId = localStorage.getItem("userId");
//     if (!storedUserId || !gymId) {
//       setError("User ID and Gym ID are required.");
//       return;
//     }

//     setUserId(storedUserId); // Set user ID from local storage

//     try {
//       const response = await axios.post("http://localhost:8080/bookings", {
//         userId: storedUserId,
//         gymId: gymId,
//         bookingDate: bookingDate,
//         timeSlot: timeSlot,
//       });

//       setSuccess(response.data.message); // Set success message
//       // Optionally redirect after success
//       setTimeout(() => {
//         navigate("/"); // Redirect to home or any other page after a successful booking
//       }, 2000);
//     } catch (err) {
//       console.error("Error creating booking:", err);
//       setError("Failed to create booking. Please try again.");
//     }
//   };

//   return (
//     <div className="booking-container">
//       <h1>Book Your Session</h1>
//       {error && <p className="error-message">{error}</p>}
//       {success && <p className="success-message">{success}</p>}
//       <form onSubmit={handleSubmit} className="booking-form">
//         <div className="form-group">
//           <label htmlFor="gymId">Gym ID:</label>
//           <input
//             type="text"
//             id="gymId"
//             value={gymId}
//             onChange={(e) => setGymId(e.target.value)} // Update gym ID state
//             required
//             placeholder="Enter Gym ID"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="bookingDate">Booking Date:</label>
//           <input
//             type="date"
//             id="bookingDate"
//             value={bookingDate}
//             onChange={(e) => setBookingDate(e.target.value)} // Update booking date state
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="timeSlot">Time Slot:</label>
//           <select
//             id="timeSlot"
//             value={timeSlot}
//             onChange={(e) => setTimeSlot(e.target.value)} // Update time slot state
//             required
//           >
//             <option value="">Select Time Slot</option>
//             <option value="Morning">Morning</option>
//             <option value="Afternoon">Afternoon</option>
//             <option value="Evening">Evening</option>
//           </select>
//         </div>
//         <button type="submit" className="booking-button">Confirm Booking</button>
//       </form>
//     </div>
//   );
// };

// export default BookingPage;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./BookingPage.css"; // Optional CSS for styling

// const BookingPage = () => {
//   const [userId, setUserId] = useState(""); // State for user ID
//   const [gyms, setGyms] = useState([]); // State for gym options
//   const [gymId, setGymId] = useState(""); // State for selected gym ID
//   const [bookingDate, setBookingDate] = useState(""); // State for booking date
//   const [timeSlot, setTimeSlot] = useState(""); // State for time slot
//   const [error, setError] = useState(""); // State for error messages
//   const [success, setSuccess] = useState(""); // State for success messages
//   const navigate = useNavigate(); // Hook to navigate programmatically

//   // Fetch gyms when the component mounts
//   useEffect(() => {
//     const fetchGyms = async () => {
//         try {
//           const response = await axios.get("http://localhost:8080/gyms");
//           console.log("Gyms Response:", response.data); // Log the response for debugging
//           if (response.data.status === "success") {
//             setGyms(response.data.gyms); // Access gyms from the response object
//           } else {
//             console.error("Failed to fetch gyms:", response.data.message);
//           }
//         } catch (err) {
//           console.error("Error fetching gyms:", err);
//           setError("Failed to load gyms. Please try again later.");
//         }
//       };
      

//     fetchGyms();
//   }, []);

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior

//     // Ensure user ID is retrieved from local storage
//     const storedUserId = localStorage.getItem("userId");
//     if (!storedUserId || !gymId) {
//       setError("User ID and Gym ID are required.");
//       return;
//     }

//     setUserId(storedUserId); // Set user ID from local storage

//     try {
//       const response = await axios.post("http://localhost:8080/bookings", {
//         userId: storedUserId,
//         gymId: gymId,
//         bookingDate: bookingDate,
//         timeSlot: timeSlot,
//       });

//       setSuccess(response.data.message); // Set success message
//       // Optionally redirect after success
//       setTimeout(() => {
//         navigate("/"); // Redirect to home or any other page after a successful booking
//       }, 2000);
//     } catch (err) {
//       console.error("Error creating booking:", err);
//       setError("Failed to create booking. Please try again.");
//     }
//   };

//   return (
//     <div className="booking-container">
//       <h1>Book Your Session</h1>
//       {error && <p className="error-message">{error}</p>}
//       {success && <p className="success-message">{success}</p>}
//       <form onSubmit={handleSubmit} className="booking-form">
//         <div className="form-group">
//           <label htmlFor="gymId">Select Gym:</label>
//           <select
//             id="gymId"
//             value={gymId}
//             onChange={(e) => setGymId(e.target.value)} // Update gym ID state
//             required
//           >
//             <option value="">Select a Gym</option>
//             {gyms.map((gym) => (
//               <option key={gym._id} value={gym._id}>
//                 {gym.name} - {gym.location} {/* Customize display here */}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="bookingDate">Booking Date:</label>
//           <input
//             type="date"
//             id="bookingDate"
//             value={bookingDate}
//             onChange={(e) => setBookingDate(e.target.value)} // Update booking date state
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="timeSlot">Time Slot:</label>
//           <select
//             id="timeSlot"
//             value={timeSlot}
//             onChange={(e) => setTimeSlot(e.target.value)} // Update time slot state
//             required
//           >
//             <option value="">Select Time Slot</option>
//             <option value="Morning">Morning</option>
//             <option value="Afternoon">Afternoon</option>
//             <option value="Evening">Evening</option>
//           </select>
//         </div>
//         <button type="submit" className="booking-button">Confirm Booking</button>
//       </form>
//     </div>
//   );
// };

// export default BookingPage;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./BookingPage.css"; // Optional CSS for styling

// const BookingPage = () => {
//   const [userId, setUserId] = useState(localStorage.getItem("userId") || ""); // State for user ID
//   const [gyms, setGyms] = useState([]); // State for gym options
//   const [gymId, setGymId] = useState(""); // State for selected gym ID
//   const [bookingDate, setBookingDate] = useState(""); // State for booking date
//   const [timeSlot, setTimeSlot] = useState(""); // State for time slot
//   const [error, setError] = useState(""); // State for error messages
//   const [success, setSuccess] = useState(""); // State for success messages
//   const [loading, setLoading] = useState(true); // State for loading status
//   const navigate = useNavigate(); // Hook to navigate programmatically

//   // Fetch gyms when the component mounts
//   useEffect(() => {
//     const fetchGyms = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/gyms");
//         console.log("Gyms Response:", response.data); // Log the response for debugging
//         if (response.data.status === "success") {
//           setGyms(response.data.gyms); // Access gyms from the response object
//         } else {
//           setError("Failed to fetch gyms.");
//         }
//       } catch (err) {
//         console.error("Error fetching gyms:", err);
//         setError("Failed to load gyms. Please try again later.");
//       } finally {
//         setLoading(false); // Set loading to false after fetching
//       }
//     };

//     fetchGyms();
//   }, []);

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior

//     if (!userId || !gymId) {
//       setError("User ID and Gym ID are required.");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:8080/bookings", {
//         userId: userId,
//         gymId: gymId,
//         bookingDate: bookingDate,
//         timeSlot: timeSlot,
//       });

//       if (response.data.status === "success") {
//         setSuccess(response.data.message); // Set success message
//         setError(""); // Clear error messages
//         // Optionally redirect after success
//         setTimeout(() => {
//           navigate("/home"); // Redirect to home or any other page after a successful booking
//         }, 2000);
//       } else {
//         setError("Failed to create booking.");
//       }
//     } catch (err) {
//       console.error("Error creating booking:", err);
//       setError("Failed to create booking. Please try again.");
//     }
//   };

//   // Show loading spinner if gyms are still being fetched
//   if (loading) {
//     return <div>Loading gyms...</div>;
//   }

//   return (
//     <div className="booking-container">
//       <h1>Book Your Session</h1>
//       {error && <p className="error-message">{error}</p>}
//       {success && <p className="success-message">{success}</p>}
//       <form onSubmit={handleSubmit} className="booking-form">
//         <div className="form-group">
//           <label htmlFor="gymId">Select Gym:</label>
//           <select
//             id="gymId"
//             value={gymId}
//             onChange={(e) => setGymId(e.target.value)} // Update gym ID state
//             required
//           >
//             <option value="">Select a Gym</option>
//             {gyms.map((gym) => (
//               <option key={gym._id} value={gym._id}>
//                 {gym.name} - {gym.location} {/* Customize display here */}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="bookingDate">Booking Date:</label>
//           <input
//             type="date"
//             id="bookingDate"
//             value={bookingDate}
//             onChange={(e) => setBookingDate(e.target.value)} // Update booking date state
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="timeSlot">Time Slot:</label>
//           <select
//             id="timeSlot"
//             value={timeSlot}
//             onChange={(e) => setTimeSlot(e.target.value)} // Update time slot state
//             required
//           >
//             <option value="">Select Time Slot</option>
//             <option value="morning">Morning</option>
//             <option value="evening">Evening</option>

//           </select>
//         </div>
//         <button type="submit" className="booking-button">Confirm Booking</button>
//       </form>
//     </div>
//   );
// };

// export default BookingPage;


//in before code it was only working booking ,after below code now notification is also working

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./BookingPage.css"; // Optional CSS for styling

// const BookingPage = () => {
//   const [userId, setUserId] = useState(localStorage.getItem("userId") || ""); // State for user ID
//   const [gyms, setGyms] = useState([]); // State for gym options
//   const [gymId, setGymId] = useState(""); // State for selected gym ID
//   const [bookingDate, setBookingDate] = useState(""); // State for booking date
//   const [timeSlot, setTimeSlot] = useState(""); // State for time slot
//   const [error, setError] = useState(""); // State for error messages
//   const [success, setSuccess] = useState(""); // State for success messages
//   const [loading, setLoading] = useState(true); // State for loading status
//   const navigate = useNavigate(); // Hook to navigate programmatically

//   // Fetch gyms when the component mounts
//   useEffect(() => {
//     const fetchGyms = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/gyms");
//         console.log("Gyms Response:", response.data); // Log the response for debugging
//         if (response.data.status === "success") {
//           setGyms(response.data.gyms); // Access gyms from the response object
//         } else {
//           setError("Failed to fetch gyms.");
//         }
//       } catch (err) {
//         console.error("Error fetching gyms:", err);
//         setError("Failed to load gyms. Please try again later.");
//       } finally {
//         setLoading(false); // Set loading to false after fetching
//       }
//     };

//     fetchGyms();
//   }, []);

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior

//     if (!userId || !gymId) {
//       setError("User ID and Gym ID are required.");
//       return;
//     }

//     try {
//       // Step 1: Attempt to create the booking
//       const bookingResponse = await axios.post("http://localhost:8080/bookings", {
//         userId: userId,
//         gymId: gymId,
//         bookingDate: bookingDate,
//         timeSlot: timeSlot,
//       });

//       if (bookingResponse.data.status === "success") {
//         setSuccess("Booking successful!");
//         setError(""); // Clear any previous error messages

//         // Step 2: Create a default notification after a successful booking
//         await axios.post("http://localhost:8080/notifications", {
//           userId: userId,
//           message: "Your booking was successful!", // Default message
//           type: "booking", // Default type
//         });

//         // Optionally redirect after success
//         setTimeout(() => {
//           navigate("/home"); // Redirect to home or any other page after a successful booking
//         }, 2000);
//       } else {
//         setError("Failed to create booking.");
//       }
//     } catch (err) {
//       console.error("Error creating booking or notification:", err);
//       setError("Failed to create booking. Please try again.");
//     }
//   };

//   // Show loading spinner if gyms are still being fetched
//   if (loading) {
//     return <div>Loading gyms...</div>;
//   }

//   return (
//     <div className="booking-container">
//       <h1>Book Your Session</h1>
//       {error && <p className="error-message">{error}</p>}
//       {success && <p className="success-message">{success}</p>}
//       <form onSubmit={handleSubmit} className="booking-form">
//         <div className="form-group">
//           <label htmlFor="gymId">Select Gym:</label>
//           <select
//             id="gymId"
//             value={gymId}
//             onChange={(e) => setGymId(e.target.value)} // Update gym ID state
//             required
//           >
//             <option value="">Select a Gym</option>
//             {gyms.map((gym) => (
//               <option key={gym._id} value={gym._id}>
//                 {gym.name} - {gym.location} {/* Customize display here */}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="bookingDate">Booking Date:</label>
//           <input
//             type="date"
//             id="bookingDate"
//             value={bookingDate}
//             onChange={(e) => setBookingDate(e.target.value)} // Update booking date state
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="timeSlot">Time Slot:</label>
//           <select
//             id="timeSlot"
//             value={timeSlot}
//             onChange={(e) => setTimeSlot(e.target.value)} // Update time slot state
//             required
//           >
//             <option value="">Select Time Slot</option>
//             <option value="morning">Morning</option>
//             <option value="evening">Evening</option>
//           </select>
//         </div>
//         <button type="submit" className="booking-button">Confirm Booking</button>
//       </form>
//     </div>
//   );
// };

// export default BookingPage;

//before it was only showing just the notification, after the below code it also showing the name of the gym which is fetched.


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./BookingPage.css"; // Optional CSS for styling

const BookingPage = () => {
  const [userId, setUserId] = useState(localStorage.getItem("userId") || ""); // State for user ID
  const [gyms, setGyms] = useState([]); // State for gym options
  const [gymId, setGymId] = useState(""); // State for selected gym ID
  const [bookingDate, setBookingDate] = useState(""); // State for booking date
  const [timeSlot, setTimeSlot] = useState(""); // State for time slot
  const [error, setError] = useState(""); // State for error messages
  const [success, setSuccess] = useState(""); // State for success messages
  const [loading, setLoading] = useState(true); // State for loading status
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Fetch gyms when the component mounts
  useEffect(() => {
    const fetchGyms = async () => {
      try {
        const response = await axios.get("http://localhost:8080/gyms");
        console.log("Gyms Response:", response.data); // Log the response for debugging
        if (response.data.status === "success") {
          setGyms(response.data.gyms); // Access gyms from the response object
        } else {
          setError("Failed to fetch gyms.");
        }
      } catch (err) {
        console.error("Error fetching gyms:", err);
        setError("Failed to load gyms. Please try again later.");
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchGyms();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!userId || !gymId) {
      setError("User ID and Gym ID are required.");
      return;
    }

    // Get the selected gym's name for the notification message
    const selectedGym = gyms.find(gym => gym._id === gymId);
    const gymName = selectedGym ? selectedGym.name : "the gym"; // Default in case gym name is unavailable

    try {
      // Step 1: Attempt to create the booking
      const bookingResponse = await axios.post("http://localhost:8080/bookings", {
        userId: userId,
        gymId: gymId,
        bookingDate: bookingDate,
        timeSlot: timeSlot,
      });

      if (bookingResponse.data.status === "success") {
        setSuccess(`Your booking for "${gymName}" gym was successful!`);
        setError(""); // Clear any previous error messages

        // Step 2: Create a personalized notification after a successful booking
        await axios.post("http://localhost:8080/notifications", {
          userId: userId,
          message: `Your booking for "${gymName}" gym was successful!`, // Custom message with gym name
          type: "booking", // Notification type
        });

        // Optionally redirect after success
        setTimeout(() => {
          navigate("/home"); // Redirect to home or any other page after a successful booking
        }, 2000);
      } else {
        setError("Failed to create booking.");
      }
    } catch (err) {
      console.error("Error creating booking or notification:", err);
      setError("Failed to create booking. Please try again.");
    }
  };

  // Show loading spinner if gyms are still being fetched
  if (loading) {
    return <div>Loading gyms...</div>;
  }

  return (
    <div className="booking-container">
      <h1>Book Your Session</h1>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="gymId">Select Gym:</label>
          <select
            id="gymId"
            value={gymId}
            onChange={(e) => setGymId(e.target.value)} // Update gym ID state
            required
          >
            <option value="">Select a Gym</option>
            {gyms.map((gym) => (
              <option key={gym._id} value={gym._id}>
                {gym.name} - {gym.location} {/* Customize display here */}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="bookingDate">Booking Date:</label>
          <input
            type="date"
            id="bookingDate"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)} // Update booking date state
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="timeSlot">Time Slot:</label>
          <select
            id="timeSlot"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)} // Update time slot state
            required
          >
            <option value="">Select Time Slot</option>
            <option value="morning">Morning</option>
            <option value="evening">Evening</option>
          </select>
        </div>
        <button type="submit" className="booking-button">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingPage;
