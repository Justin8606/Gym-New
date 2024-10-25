import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./SinglePage.css"; // Optional CSS for styling

const SinglePage = () => {
  const { id } = useParams(); // Extract the gym ID from the URL
  const [gymDetails, setGymDetails] = useState(null); // State to store gym details
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State to capture errors

  // Fetch gym details when the component mounts
  useEffect(() => {
    const fetchGymDetails = async () => {
      try {
        // Send GET request to the backend to fetch gym details using the ID
        const response = await axios.get(`http://localhost:8080/gyms/${id}`);
        setGymDetails(response.data.gym); // Set the fetched gym details to state
        setLoading(false); // Set loading to false after fetching
      } catch (err) {
        console.error("Error fetching gym details:", err);
        setError("Failed to load gym details. Please try again.");
        setLoading(false);
      }
    };

    fetchGymDetails(); // Call the function to fetch gym details
  }, [id]);

  // Handle loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>{error}</div>;
  }

  // Render gym details when fetched successfully
  return (
    <div className="gym-details-container">
      <h1>{gymDetails.name}</h1>
      <p>Location: {gymDetails.location}</p>
      <p>Price: {gymDetails.price}</p>
      <p>Rating: {gymDetails.rating || "Not rated yet"}</p>
      <div className="gym-images">
        {/* Render gym images if available */}
        {gymDetails.images && gymDetails.images.length > 0 ? (
          gymDetails.images.map((img, index) => (
            <img key={index} src={img} alt={`${gymDetails.name} ${index}`} />
          ))
        ) : (
          <p>No images available.</p>
        )}
      </div>
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
    </div>
  );
};

export default SinglePage;
