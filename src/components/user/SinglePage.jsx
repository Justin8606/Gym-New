// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import "./SinglePage.css"; // Optional CSS for styling

// const SinglePage = () => {
//   const { id } = useParams(); // Extract the gym ID from the URL
//   const [gymDetails, setGymDetails] = useState(null); // State to store gym details
//   const [loading, setLoading] = useState(true); // State for loading
//   const [error, setError] = useState(null); // State to capture errors

//   // Fetch gym details when the component mounts
//   useEffect(() => {
//     const fetchGymDetails = async () => {
//       try {
//         // Send GET request to the backend to fetch gym details using the ID
//         const response = await axios.get(`http://localhost:8080/gyms/${id}`);
//         setGymDetails(response.data.gym); // Set the fetched gym details to state
//         setLoading(false); // Set loading to false after fetching
//       } catch (err) {
//         console.error("Error fetching gym details:", err);
//         setError("Failed to load gym details. Please try again.");
//         setLoading(false);
//       }
//     };

//     fetchGymDetails(); // Call the function to fetch gym details
//   }, [id]);

//   // Handle loading state
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // Handle error state
//   if (error) {
//     return <div>{error}</div>;
//   }

//   // Render gym details when fetched successfully
//   return (
//     <div className="gym-details-container">
//       <h1>{gymDetails.name}</h1>
//       <p>Location: {gymDetails.location}</p>
//       <p>Price: {gymDetails.price}</p>
//       <p>Rating: {gymDetails.rating || "Not rated yet"}</p>
//       <div className="gym-images">
//         {/* Render gym images if available */}
//         {gymDetails.images && gymDetails.images.length > 0 ? (
//           gymDetails.images.map((img, index) => (
//             <img key={index} src={img} alt={`${gymDetails.name} ${index}`} />
//           ))
//         ) : (
//           <p>No images available.</p>
//         )}
//       </div>
//       <h2>Special Facilities</h2>
//       <ul>
//         {gymDetails.specialFacilities.length > 0 ? (
//           gymDetails.specialFacilities.map((facility, index) => (
//             <li key={index}>{facility}</li>
//           ))
//         ) : (
//           <p>No special facilities listed.</p>
//         )}
//       </ul>
//       <h2>Classes Offered</h2>
//       <ul>
//         {gymDetails.classesOffered.length > 0 ? (
//           gymDetails.classesOffered.map((classOffered, index) => (
//             <li key={index}>{classOffered}</li>
//           ))
//         ) : (
//           <p>No classes offered.</p>
//         )}
//       </ul>
//       <h2>Personal Trainers</h2>
//       <ul>
//         {gymDetails.personalTrainers.length > 0 ? (
//           gymDetails.personalTrainers.map((trainer, index) => (
//             <li key={index}>{trainer}</li>
//           ))
//         ) : (
//           <p>No personal trainers available.</p>
//         )}
//       </ul>
//       <p>Locker Room: {gymDetails.lockerRoom ? "Available" : "Not Available"}</p>
//       <p>Showers: {gymDetails.showers ? "Available" : "Not Available"}</p>
//     </div>
//   );
// };

// export default SinglePage;


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import "./SinglePage.css"; // Optional CSS for styling

// const SinglePage = () => {
//   const { id } = useParams(); // Extract the gym ID from the URL
//   const [gymDetails, setGymDetails] = useState(null); // State to store gym details
//   const [loading, setLoading] = useState(true); // State for loading
//   const [error, setError] = useState(null); // State to capture errors
//   const [userRating, setUserRating] = useState(0); // State for user's selected rating
//   const [averageRating, setAverageRating] = useState(0); // State for average rating from backend

//   // Fetch gym details and average rating when the component mounts
//   useEffect(() => {
//     const fetchGymDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/gyms/${id}`);
//         setGymDetails(response.data.gym);
//         setAverageRating(response.data.gym.rating || 0); // Assuming backend returns average rating
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching gym details:", err);
//         setError("Failed to load gym details. Please try again.");
//         setLoading(false);
//       }
//     };

//     fetchGymDetails(); // Call the function to fetch gym details
//   }, [id]);

//   // Submit user rating to backend
//   const submitRating = async (ratingValue) => {
//     try {
//       const response = await axios.post(`http://localhost:8080/gyms/${id}/rate`, {
//         userId: "6718d2ff1a1b82d5ca6dec3c", // Replace with the actual user ID
//         userRating: ratingValue, // Use `userRating` for consistency
//       });
//       setAverageRating(response.data.avgRating); // Update the displayed average rating
//       setUserRating(ratingValue); // Store the user’s selected rating
//     } catch (err) {
//       console.error("Error submitting rating:", err);
//     }
//   };

//   // Handle loading and error states
//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   if (error) {
//     return <div>{error}</div>;
//   }

//   // Render gym details and rating functionality
//   return (
//     <div className="gym-details-container">
//       <h1>{gymDetails.name}</h1>
//       <p>Location: {gymDetails.location}</p>
//       <p>Price: {gymDetails.price}</p>
//       <p>Average Rating: {averageRating.toFixed(1)} / 5</p>
//       <div className="gym-images">
//         {gymDetails.images && gymDetails.images.length > 0 ? (
//           gymDetails.images.map((img, index) => (
//             <img key={index} src={img} alt={`${gymDetails.name} ${index}`} />
//           ))
//         ) : (
//           <p>No images available.</p>
//         )}
//       </div>
//       <h2>Rate this Gym</h2>
//       <div className="rating-stars">
//         {[1, 2, 3, 4, 5].map((value) => (
//           <span
//             key={value}
//             className={`star ${userRating >= value ? "selected" : ""}`}
//             onClick={() => submitRating(value)} // Handle rating click
//           >
//             &#9733;
//           </span>
//         ))}
//       </div>

//       <h2>Special Facilities</h2>
//       <ul>
//         {gymDetails.specialFacilities.length > 0 ? (
//           gymDetails.specialFacilities.map((facility, index) => (
//             <li key={index}>{facility}</li>
//           ))
//         ) : (
//           <p>No special facilities listed.</p>
//         )}
//       </ul>
//       <h2>Classes Offered</h2>
//       <ul>
//         {gymDetails.classesOffered.length > 0 ? (
//           gymDetails.classesOffered.map((classOffered, index) => (
//             <li key={index}>{classOffered}</li>
//           ))
//         ) : (
//           <p>No classes offered.</p>
//         )}
//       </ul>
//       <h2>Personal Trainers</h2>
//       <ul>
//         {gymDetails.personalTrainers.length > 0 ? (
//           gymDetails.personalTrainers.map((trainer, index) => (
//             <li key={index}>{trainer}</li>
//           ))
//         ) : (
//           <p>No personal trainers available.</p>
//         )}
//       </ul>
//       <p>Locker Room: {gymDetails.lockerRoom ? "Available" : "Not Available"}</p>
//       <p>Showers: {gymDetails.showers ? "Available" : "Not Available"}</p>
//     </div>
//   );
// };

// export default SinglePage;


// Import necessary hooks and components
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import "./SinglePage.css"; // Optional CSS for styling

// const SinglePage = () => {
//   const { id } = useParams(); // Extract the gym ID from the URL
//   const [gymDetails, setGymDetails] = useState(null); // State to store gym details
//   const [loading, setLoading] = useState(true); // State for loading
//   const [error, setError] = useState(null); // State to capture errors
//   const [userRating, setUserRating] = useState(0); // State for user's selected rating
//   const [averageRating, setAverageRating] = useState(0); // State for average rating from backend

//   // Fetch gym details and average rating when the component mounts
//   useEffect(() => {
//     const fetchGymDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/gyms/${id}`);
//         setGymDetails(response.data.gym);
//         setAverageRating(response.data.gym.rating || 0); // Assuming backend returns average rating
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching gym details:", err);
//         setError("Failed to load gym details. Please try again.");
//         setLoading(false);
//       }
//     };

//     fetchGymDetails(); // Call the function to fetch gym details
//   }, [id]);

//   // Submit user rating to backend
//   const submitRating = async (ratingValue) => {
//     const userId = localStorage.getItem("userId"); // Retrieve userId from local storage
//     if (!userId) {
//       console.error("User not logged in.");
//       return; // Optionally, show a message to log in
//     }

//     try {
//       const response = await axios.post(`http://localhost:8080/gyms/${id}/rate`, {
//         userId: userId, // Use retrieved userId
//         userRating: ratingValue, // Use `userRating` for consistency
//       });
//       setAverageRating(response.data.avgRating); // Update the displayed average rating
//       setUserRating(ratingValue); // Store the user’s selected rating
//     } catch (err) {
//       console.error("Error submitting rating:", err);
//     }
//   };

//   // Handle loading and error states
//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   if (error) {
//     return <div>{error}</div>;
//   }

//   // Render gym details and rating functionality
//   return (
//     <div className="gym-details-container">
//       <h1>{gymDetails.name}</h1>
//       <p>Location: {gymDetails.location}</p>
//       <p>Price: {gymDetails.price}</p>
//       <p>Average Rating: {averageRating.toFixed(1)} / 5</p>
//       <div className="gym-images">
//         {gymDetails.images && gymDetails.images.length > 0 ? (
//           gymDetails.images.map((img, index) => (
//             <img key={index} src={img} alt={`${gymDetails.name} ${index}`} />
//           ))
//         ) : (
//           <p>No images available.</p>
//         )}
//       </div>
//       <h2>Rate this Gym</h2>
//       <div className="rating-stars">
//         {[1, 2, 3, 4, 5].map((value) => (
//           <span
//             key={value}
//             className={`star ${userRating >= value ? "selected" : ""}`}
//             onClick={() => submitRating(value)} // Handle rating click
//           >
//             &#9733;
//           </span>
//         ))}
//       </div>

//       {/* Additional gym details */}
//       <h2>Special Facilities</h2>
//       <ul>
//         {gymDetails.specialFacilities.length > 0 ? (
//           gymDetails.specialFacilities.map((facility, index) => (
//             <li key={index}>{facility}</li>
//           ))
//         ) : (
//           <p>No special facilities listed.</p>
//         )}
//       </ul>
//       <h2>Classes Offered</h2>
//       <ul>
//         {gymDetails.classesOffered.length > 0 ? (
//           gymDetails.classesOffered.map((classOffered, index) => (
//             <li key={index}>{classOffered}</li>
//           ))
//         ) : (
//           <p>No classes offered.</p>
//         )}
//       </ul>
//       <h2>Personal Trainers</h2>
//       <ul>
//         {gymDetails.personalTrainers.length > 0 ? (
//           gymDetails.personalTrainers.map((trainer, index) => (
//             <li key={index}>{trainer}</li>
//           ))
//         ) : (
//           <p>No personal trainers available.</p>
//         )}
//       </ul>
//       <p>Locker Room: {gymDetails.lockerRoom ? "Available" : "Not Available"}</p>
//       <p>Showers: {gymDetails.showers ? "Available" : "Not Available"}</p>
//     </div>
//   );
// };

// export default SinglePage;


import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./SinglePage.css"; // Optional CSS for styling

const SinglePage = () => {
  const { id } = useParams(); // Extract the gym ID from the URL
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [gymDetails, setGymDetails] = useState(null); // State to store gym details
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State to capture errors
  const [userRating, setUserRating] = useState(0); // State for user's selected rating
  const [averageRating, setAverageRating] = useState(0); // State for average rating from backend

  // Fetch gym details and average rating when the component mounts
  useEffect(() => {
    const fetchGymDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/gyms/${id}`);
        setGymDetails(response.data.gym);
        setAverageRating(response.data.gym.rating || 0); // Assuming backend returns average rating
        setLoading(false);
      } catch (err) {
        console.error("Error fetching gym details:", err);
        setError("Failed to load gym details. Please try again.");
        setLoading(false);
      }
    };

    fetchGymDetails(); // Call the function to fetch gym details
  }, [id]);

  const handleBack = () => {
    navigate("/home");
  };


  // Submit user rating to backend
  const submitRating = async (ratingValue) => {
    const userId = localStorage.getItem("userId"); // Retrieve userId from local storage
    if (!userId) {
      console.error("User not logged in.");
      return; // Optionally, show a message to log in
    }

    try {
      const response = await axios.post(`http://localhost:8080/gyms/${id}/rate`, {
        userId: userId, // Use retrieved userId
        userRating: ratingValue, // Use `userRating` for consistency
      });
      setAverageRating(response.data.avgRating); // Update the displayed average rating
      setUserRating(ratingValue); // Store the user’s selected rating
    } catch (err) {
      console.error("Error submitting rating:", err);
    }
  };

  // Handle loading and error states
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  // Render gym details and rating functionality
  return (
    
    <div className="gym-details-container">

        
        
      <h1>{gymDetails.name}</h1>
      <p>Location: {gymDetails.location}</p>
      <p>Price: {gymDetails.price}</p>
      <p>Average Rating: {averageRating.toFixed(1)} / 5</p>
      <div className="gym-images">
        {gymDetails.images && gymDetails.images.length > 0 ? (
          gymDetails.images.map((img, index) => (
            <img key={index} src={img} alt={`${gymDetails.name} ${index}`} />
          ))
        ) : (
          <p>No images available.</p>
        )}
      </div>
      <h2>Rate this Gym</h2>
      <div className="rating-stars">
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            className={`star ${userRating >= value ? "selected" : ""}`}
            onClick={() => submitRating(value)} // Handle rating click
          >
            &#9733;
          </span>
        ))}
      </div>

      {/* Additional gym details */}
      <h2>Special Facilities</h2>
      <ul>
        {gymDetails.specialFacilities.length > 0 ? (
          gymDetails.specialFacilities.map((facility, index) => (
            <li key={index}>{facility}</li>
          ))
        ) : (
          <p>No special facilities listed.</p>
        )}
      </ul>
      <h2>Classes Offered</h2>
      <ul>
        {gymDetails.classesOffered.length > 0 ? (
          gymDetails.classesOffered.map((classOffered, index) => (
            <li key={index}>{classOffered}</li>
          ))
        ) : (
          <p>No classes offered.</p>
        )}
      </ul>
      <h2>Personal Trainers</h2>
      <ul>
        {gymDetails.personalTrainers.length > 0 ? (
          gymDetails.personalTrainers.map((trainer, index) => (
            <li key={index}>{trainer}</li>
          ))
        ) : (
          <p>No personal trainers available.</p>
        )}
      </ul>
      <p>Locker Room: {gymDetails.lockerRoom ? "Available" : "Not Available"}</p>
      <p>Showers: {gymDetails.showers ? "Available" : "Not Available"}</p>

      {/* Booking button */}
      <button className="booking-button" onClick={() => navigate("/bookings")}>
        Book Now
      </button>

      <button className="back-button" onClick={handleBack}>Back</button>

    </div>
  );
};

export default SinglePage;
