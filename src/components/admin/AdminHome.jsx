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


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './AdminHome.css';

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
//       const response = await axios.post("http://localhost:8080/admin/add-gym", {
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
//   };

//   return (
//     <div>
//       <h2>Add New Gym</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Gym Name:</label>
//           <input type="text" name="name" value={gymDetails.name} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Location:</label>
//           <input type="text" name="location" value={gymDetails.location} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Price:</label>
//           <input type="text" name="price" value={gymDetails.price} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Equipments (comma-separated):</label>
//           <input type="text" name="equipments" value={gymDetails.equipments} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Rating (optional):</label>
//           <input type="text" name="rating" value={gymDetails.rating} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Images (comma-separated URLs, optional):</label>
//           <input type="text" name="images" value={gymDetails.images} onChange={handleChange} />
//         </div>
//         <button type="submit">Add Gym</button>
//       </form>
//     </div>
//   );
// };

// export default AdminHome;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './AdminHome.css';

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
//     images: "",  // Optional, handle a single image as a URL
//     latitude: "", // New field for latitude
//     longitude: "" // New field for longitude
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setGymDetails({ ...gymDetails, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // console.log(gymDetails)

//     try {
//       const response = await axios.post("http://localhost:8080/admin/add-gym", {
//         ...gymDetails,
//         equipments: gymDetails.equipments.split(","),
//         images: gymDetails.images ? gymDetails.images.split(",") : []
//       });

//       console.log("Gym added successfully:", response.data);
//       alert("Gym added successfully!");
//     } catch (error) {
//       console.error("Error adding gym:", error);
//       alert("Error adding gym!");
//     }
//   };

//   return (
//     <div>
//       <h2>Add New Gym</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Gym Name:</label>
//           <input type="text" name="name" value={gymDetails.name} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Location:</label>
//           <input type="text" name="location" value={gymDetails.location} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Price:</label>
//           <input type="text" name="price" value={gymDetails.price} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Equipments (comma-separated):</label>
//           <input type="text" name="equipments" value={gymDetails.equipments} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Rating (optional):</label>
//           <input type="text" name="rating" value={gymDetails.rating} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Images (comma-separated URLs, optional):</label>
//           <input type="text" name="images" value={gymDetails.images} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Latitude:</label>
//           <input type="text" name="latitude" value={gymDetails.latitude} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Longitude:</label>
//           <input type="text" name="longitude" value={gymDetails.longitude} onChange={handleChange} required />
//         </div>
//         <button type="submit">Add Gym</button>
//       </form>


//     </div>
//   );
// };

// export default AdminHome;


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
    rating: "",  // Optional, leave empty
    images: "",  // Optional, handle a single image as a URL
    latitude: "",  // New field for latitude
    longitude: "",  // New field for longitude
    specialFacilities: "",  // New field for special facilities (comma-separated)
    classesOffered: "",  // New field for classes offered (comma-separated)
    personalTrainers: "",  // New field for personal trainers (comma-separated)
    lockerRoom: false,  // New field for locker room availability
    showers: false  // New field for shower availability
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setGymDetails({ ...gymDetails, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/admin/add-gym", {
        ...gymDetails,
        equipments: gymDetails.equipments.split(","),
        images: gymDetails.images ? gymDetails.images.split(",") : [],
        specialFacilities: gymDetails.specialFacilities.split(","),
        classesOffered: gymDetails.classesOffered.split(","),
        personalTrainers: gymDetails.personalTrainers.split(",")
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
        <div>
          <label>Latitude:</label>
          <input type="text" name="latitude" value={gymDetails.latitude} onChange={handleChange} required />
        </div>
        <div>
          <label>Longitude:</label>
          <input type="text" name="longitude" value={gymDetails.longitude} onChange={handleChange} required />
        </div>

        {/* New Fields */}
        <div>
          <label>Special Facilities (comma-separated):</label>
          <input type="text" name="specialFacilities" value={gymDetails.specialFacilities} onChange={handleChange} />
        </div>
        <div>
          <label>Classes Offered (comma-separated):</label>
          <input type="text" name="classesOffered" value={gymDetails.classesOffered} onChange={handleChange} />
        </div>
        <div>
          <label>Personal Trainers (comma-separated):</label>
          <input type="text" name="personalTrainers" value={gymDetails.personalTrainers} onChange={handleChange} />
        </div>
        <div>
          <label>Locker Room:</label>
          <input type="checkbox" name="lockerRoom" checked={gymDetails.lockerRoom} onChange={handleChange} />
        </div>
        <div>
          <label>Showers:</label>
          <input type="checkbox" name="showers" checked={gymDetails.showers} onChange={handleChange} />
        </div>
        <button type="submit">Add Gym</button>
      </form>
    </div>
  );
};

export default AdminHome;
