// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'

// const AdminHome = () => {
//   sessionStorage.setItem('isAdminAuthenticated', true);

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!sessionStorage.getItem('isAdminAuthenticated')) {
//       navigate('/admin-home');
//     }
//   }, [navigate]);

//   const [gymDetails, setGymDetails] = useState({
//     name: "",
//     location: "",
//     price: "",
//     equipments: "",
//     rating: "", // Optional, leave empty
//     images: ""  // Optional, for simplicity, we'll handle a single image as a URL
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setGymDetails({ ...gymDetails, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Send the POST request to your backend
//       const response = await axios.post("/add-gym", {
//         ...gymDetails,
//         // Convert equipments string to an array (comma-separated)
//         equipments: gymDetails.equipments.split(","),
//         images: gymDetails.images ? gymDetails.images.split(",") : []
//       });

//       console.log("Gym added successfully:", response.data);
//       alert("Gym added successfully!");
//     } catch (error) {
//       console.error("Error adding gym:", error);
//       alert("Error adding gym!");
//     }
//     return (
//       <div>
//         <h2>Add New Gym</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>Gym Name:</label>
//             <input type="text" name="name" value={gymDetails.name} onChange={handleChange} required />
//           </div>
//           <div>
//             <label>Location:</label>
//             <input type="text" name="location" value={gymDetails.location} onChange={handleChange} required />
//           </div>
//           <div>
//             <label>Price:</label>
//             <input type="text" name="price" value={gymDetails.price} onChange={handleChange} required />
//           </div>
//           <div>
//             <label>Equipments (comma-separated):</label>
//             <input type="text" name="equipments" value={gymDetails.equipments} onChange={handleChange} required />
//           </div>
//           <div>
//             <label>Rating (optional):</label>
//             <input type="text" name="rating" value={gymDetails.rating} onChange={handleChange} />
//           </div>
//           <div>
//             <label>Images (comma-separated URLs, optional):</label>
//             <input type="text" name="images" value={gymDetails.images} onChange={handleChange} />
//           </div>
//           <button type="submit">Add Gym</button>
//         </form>
//       </div>
//     )
//   }
// }

//   export default AdminHome


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminHome.css';

const AdminHome = () => {
  sessionStorage.setItem('isAdminAuthenticated', true);

  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem('isAdminAuthenticated')) {
      navigate('/admin-home');
    }
  }, [navigate]);

  const [gymDetails, setGymDetails] = useState({
    name: "",
    location: "",
    price: "",
    equipments: "",
    rating: "", // Optional, leave empty
    images: ""  // Optional, for simplicity, we'll handle a single image as a URL
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGymDetails({ ...gymDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the POST request to your backend
      const response = await axios.post("http://localhost:8080/admin/add-gym", {
        ...gymDetails,
        // Convert equipments string to an array (comma-separated)
        equipments: gymDetails.equipments.split(","),
        images: gymDetails.images ? gymDetails.images.split(",") : []
      });

      console.log("Gym added successfully:", response.data);
      alert("Gym added successfully!");
    } catch (error) {
      console.error("Error adding gym:", error);
      alert("Error adding gym!");
    }
  };

  return (
    <div>
      <h2>Add New Gym</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Gym Name:</label>
          <input type="text" name="name" value={gymDetails.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" name="location" value={gymDetails.location} onChange={handleChange} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="text" name="price" value={gymDetails.price} onChange={handleChange} required />
        </div>
        <div>
          <label>Equipments (comma-separated):</label>
          <input type="text" name="equipments" value={gymDetails.equipments} onChange={handleChange} required />
        </div>
        <div>
          <label>Rating (optional):</label>
          <input type="text" name="rating" value={gymDetails.rating} onChange={handleChange} />
        </div>
        <div>
          <label>Images (comma-separated URLs, optional):</label>
          <input type="text" name="images" value={gymDetails.images} onChange={handleChange} />
        </div>
        <button type="submit">Add Gym</button>
      </form>
    </div>
  );
};

export default AdminHome;
