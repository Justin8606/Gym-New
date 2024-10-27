// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const HomePage = () => {
//   const [gyms, setGyms] = useState([]);

//   // Fetch gyms from the backend when the component mounts
//   useEffect(() => {
//     const fetchGyms = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/gyms"); // Change the URL if necessary
//         if (response.data.status === "success") {
//           setGyms(response.data.gyms);
//         }
//       } catch (error) {
//         console.error("Error fetching gyms", error);
//       }
//     };
//     fetchGyms();
//   }, []);

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Available Gyms</h2>
//       <div className="row">
//         {gyms.map((gym) => (
//           <div className="col-md-4 mb-4" key={gym._id}>
//             <div className="card h-100">
//               <div className="card-body">
//                 <h5 className="card-title">{gym.name}</h5>
//                 <p className="card-text">
//                   <strong>Location:</strong> {gym.location}
//                 </p>
//                 <p className="card-text">
//                   <strong>Price:</strong> ${gym.price}
//                 </p>
//                 <p className="card-text">
//                   <strong>Rating:</strong> {gym.rating ? gym.rating : "No rating available"}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const HomePage = () => {
//   const [gyms, setGyms] = useState([]);

//   // Fetch gyms from the backend when the component mounts
//   useEffect(() => {
//     const fetchGyms = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/gyms"); // Change the URL if necessary
//         if (response.data.status === "success") {
//           setGyms(response.data.gyms);
//         }
//       } catch (error) {
//         console.error("Error fetching gyms", error);
//       }
//     };
//     fetchGyms();
//   }, []);

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Available Gyms</h2>
//       <div className="row">
//         {gyms.map((gym) => (
//           <div className="col-md-4 mb-4" key={gym._id}>
//             <div className="card h-100">
//               {/* Display image */}
//               {gym.images && gym.images.length > 0 && (
//                 <img
//                   src={gym.images[0]} // Assuming you have an array of images, display the first one
//                   alt={gym.name}
//                   className="card-img-top"
//                   style={{ maxHeight: "200px", objectFit: "cover" }} // Optional: style the image
//                 />
//               )}
//               <div className="card-body">
//                 <h5 className="card-title">{gym.name}</h5>
//                 <p className="card-text">
//                   <strong>Location:</strong> {gym.location}
//                 </p>
//                 <p className="card-text">
//                   <strong>Price:</strong> ${gym.price}
//                 </p>
//                 <p className="card-text">
//                   <strong>Rating:</strong> {gym.rating ? gym.rating : "No rating available"}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./HomePage.css"; // CSS file for custom styling

// const HomePage = () => {
//   const [gyms, setGyms] = useState([]);
//   const [searchQuery, setSearchQuery] = useState(""); // State for search bar input

//   // Fetch gyms from the backend when the component mounts
//   useEffect(() => {
//     const fetchGyms = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/gyms"); // Change the URL if necessary
//         if (response.data.status === "success") {
//           setGyms(response.data.gyms);
//         }
//       } catch (error) {
//         console.error("Error fetching gyms", error);
//       }
//     };
//     fetchGyms();
//   }, []);

//   // Filter gyms based on search query
//   const filteredGyms = gyms.filter((gym) =>
//     gym.location.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Available Gyms</h2>

//       {/* Search bar */}
//       <div className="search-bar mb-4">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search by location"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       {/* Gyms listing */}
//       <div className="row">
//         {filteredGyms.length > 0 ? (
//           filteredGyms.map((gym) => (
//             <div className="col-md-4 mb-4" key={gym._id}>
//               <div className="card h-100">
//                 {/* Display image */}
//                 {gym.images && gym.images.length > 0 && (
//                   <img
//                     src={gym.images[0]} // Display the first image
//                     alt={gym.name}
//                     className="card-img-top"
//                     style={{ maxHeight: "200px", objectFit: "cover" }}
//                   />
//                 )}
//                 <div className="card-body">
//                   <h5 className="card-title">{gym.name}</h5>
//                   <p className="card-text">
//                     <strong>Location:</strong> {gym.location}
//                   </p>
//                   <p className="card-text">
//                     <strong>Price:</strong> ${gym.price}
//                   </p>
//                   <p className="card-text">
//                     <strong>Rating:</strong> {gym.rating ? gym.rating : "No rating available"}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center">No gyms found for this location.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./HomePage.css"; // CSS file for custom styling
// import MapView from "./MapView"; // Import the MapView component

// const HomePage = () => {
//   const [gyms, setGyms] = useState([]);
//   const [searchQuery, setSearchQuery] = useState(""); // State for search bar input

//   // Fetch gyms from the backend when the component mounts
//   useEffect(() => {
//     const fetchGyms = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/gyms"); // Change the URL if necessary
//         if (response.data.status === "success") {
//           setGyms(response.data.gyms);
//         }
//       } catch (error) {
//         console.error("Error fetching gyms", error);
//       }
//     };
//     fetchGyms();
//   }, []);

//   // Filter gyms based on search query
//   const filteredGyms = gyms.filter((gym) =>
//     gym.location.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Available Gyms</h2>

//       {/* Search bar */}
//       <div className="search-bar mb-4">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search by location"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       <div className="row">
//         <div className="col-md-6">
//           {/* Gyms listing */}
//           {filteredGyms.length > 0 ? (
//             filteredGyms.map((gym) => (
//               <div className="col-md-12 mb-4" key={gym._id}>
//                 <div className="card h-100">
//                   {/* Display image */}
//                   {gym.images && gym.images.length > 0 && (
//                     <img
//                       src={gym.images[0]} // Display the first image
//                       alt={gym.name}
//                       className="card-img-top"
//                       style={{ maxHeight: "200px", objectFit: "cover" }}
//                     />
//                   )}
//                   <div className="card-body">
//                     <h5 className="card-title">{gym.name}</h5>
//                     <p className="card-text">
//                       <strong>Location:</strong> {gym.location}
//                     </p>
//                     <p className="card-text">
//                       <strong>Price:</strong> ${gym.price}
//                     </p>
//                     <p className="card-text">
//                       <strong>Rating:</strong> {gym.rating ? gym.rating : "No rating available"}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-center">No gyms found for this location.</p>
//           )}
//         </div>

//         <div className="col-md-6">
//           {/* Map view */}
//           <MapView items={filteredGyms} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./HomePage.css"; // CSS file for custom styling
// import MapView from "./MapView"; // Import the MapView component

// const HomePage = () => {
//   const [gyms, setGyms] = useState([]);
//   const [searchQuery, setSearchQuery] = useState(""); // State for search bar input

//   // Fetch gyms from the backend when the component mounts
//   const fetchGyms = async (query = "") => {
//     try {
//       const response = await axios.get(`http://localhost:8080/gyms`, {
//         params: { location: query }
//       });
//       if (response.data.status === "success") {
//         setGyms(response.data.gyms);
//       }
//     } catch (error) {
//       console.error("Error fetching gyms", error);
//     }
//   };

//   useEffect(() => {
//     fetchGyms(); // Fetch all gyms on initial load
//   }, []);

//   // Handle search button click
//   const handleSearch = () => {
//     fetchGyms(searchQuery); // Fetch gyms based on search query
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Available Gyms</h2>

//       {/* Search bar with a search button */}
//       <div className="search-bar mb-4 d-flex">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search by location"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button className="btn btn-primary ml-2" onClick={handleSearch}>Search</button>
//       </div>

//       <div className="row">
//         <div className="col-md-6">
//           {/* Gyms listing */}
//           {gyms.length > 0 ? (
//             gyms.map((gym) => (
//               <div className="col-md-12 mb-4" key={gym._id}>
//                 <div className="card h-100">
//                   {/* Display image */}
//                   {gym.images && gym.images.length > 0 && (
//                     <img
//                       src={gym.images[0]} // Display the first image
//                       alt={gym.name}
//                       className="card-img-top"
//                       style={{ maxHeight: "200px", objectFit: "cover" }}
//                     />
//                   )}
//                   <div className="card-body">
//                     <h5 className="card-title">{gym.name}</h5>
//                     <p className="card-text">
//                       <strong>Location:</strong> {gym.location}
//                     </p>
//                     <p className="card-text">
//                       <strong>Price:</strong> {gym.price}
//                     </p>
//                     <p className="card-text">
//                       <strong>Rating:</strong> {gym.rating ? gym.rating : "No rating available"}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-center">No gyms found for this location.</p>
//           )}
//         </div>

//         <div className="col-md-6">
//           {/* Map view */}
//           <MapView items={gyms} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import "./HomePage.css"; // CSS file for custom styling
// import MapView from "./MapView"; // Import the MapView component

// const HomePage = () => {
//   const [gyms, setGyms] = useState([]);
//   const [searchQuery, setSearchQuery] = useState(""); // State for search bar input

//   // Fetch gyms from the backend when the component mounts
//   const fetchGyms = async (query = "") => {
//     try {
//       const response = await axios.get(`http://localhost:8080/gyms`, {
//         params: { location: query }
//       });
//       if (response.data.status === "success") {
//         setGyms(response.data.gyms);
//       }
//     } catch (error) {
//       console.error("Error fetching gyms", error);
//     }
//   };

//   useEffect(() => {
//     fetchGyms(); // Fetch all gyms on initial load
//   }, []);

//   // Handle search button click
//   const handleSearch = () => {
//     fetchGyms(searchQuery); // Fetch gyms based on search query
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Available Gyms</h2>

//       {/* Search bar with a search button */}
//       <div className="search-bar mb-4 d-flex">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search by location"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button className="btn btn-primary ml-2" onClick={handleSearch}>
//           Search
//         </button>
//       </div>

//       <div className="row">
//         <div className="col-md-6">
//           {/* Gyms listing */}
//           {gyms.length > 0 ? (
//             gyms.map((gym) => (
//               <div className="col-md-12 mb-4" key={gym._id}>
//                 {/* Use Link to pass the gym's ID */}
//                 <Link to={`/gyms/${gym._id}`} className="gym-link"> 
//                   <div className="card h-100">
//                     {/* Display image */}
//                     {gym.images && gym.images.length > 0 && (
//                       <img
//                         src={gym.images[0]} // Display the first image
//                         alt={gym.name}
//                         className="card-img-top"
//                         style={{ maxHeight: "200px", objectFit: "cover" }}
//                       />
//                     )}
//                     <div className="card-body">
//                       <h5 className="card-title">{gym.name}</h5>
//                       <p className="card-text">
//                         <strong>Location:</strong> {gym.location}
//                       </p>
//                       <p className="card-text">
//                         <strong>Price:</strong> {gym.price}
//                       </p>
//                       <p className="card-text">
//                         <strong>Rating:</strong> {gym.rating ? gym.rating : "No rating available"}
//                       </p>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             ))
//           ) : (
//             <p className="text-center">No gyms found for this location.</p>
//           )}
//         </div>

//         <div className="col-md-6">
//           {/* Map view */}
//           <MapView items={gyms} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

//next code is to add navbar //extra after rating

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import "./HomePage.css"; 
// import MapView from "./MapView"; 

// const HomePage = () => {
//   const [gyms, setGyms] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   const fetchGyms = async (query = "") => {
//     try {
//       const response = await axios.get(`http://localhost:8080/gyms`, {
//         params: { location: query }
//       });
//       if (response.data.status === "success") {
//         setGyms(response.data.gyms);
//       }
//     } catch (error) {
//       console.error("Error fetching gyms", error);
//     }
//   };

  
//   useEffect(() => {
//     fetchGyms();
//   }, []);

//   const handleSearch = () => {
//     fetchGyms(searchQuery);
//   };

//   return (
    
//     <div className="container mt-5">
//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
//         <div className="container">
//           <Link className="navbar-brand" to="/">
//             Gym-Connect
//           </Link>
//           <Link className="" to="/about">
//             About
//           </Link>
//           <Link className="" to="/contact">
//             Contact
//           </Link>
          
//           <div className="ml-auto">
//             <button
//               className="btn btn-outline-primary"
//               onClick={() => navigate("/profile")}
//               style={{
//                 borderRadius: "25px",
//                 padding: "5px 20px",
//                 fontWeight: "bold",
//               }}
//             >
//               Profile
//             </button>
//           </div>
//         </div>
//       </nav>

//       <h2 className="text-center mb-4">Available Gyms</h2>

//       <div className="search-bar mb-4 d-flex">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search by location"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button className="btn btn-primary ml-2" onClick={handleSearch}>
//           Search
//         </button>
//       </div>

//       <div className="row">
//         <div className="col-md-6">
//           {gyms.length > 0 ? (
//             gyms.map((gym) => (
//               <div className="col-md-12 mb-4" key={gym._id}>
//                 <Link to={`/gyms/${gym._id}`} className="gym-link">
//                   <div className="card h-100">
//                     {gym.images && gym.images.length > 0 && (
//                       <img
//                         src={gym.images[0]}
//                         alt={gym.name}
//                         className="card-img-top"
//                         style={{ maxHeight: "200px", objectFit: "cover" }}
//                       />
//                     )}
//                     <div className="card-body">
//                       <h5 className="card-title">{gym.name}</h5>
//                       <p className="card-text">
//                         <strong>Location:</strong> {gym.location}
//                       </p>
//                       <p className="card-text">
//                         <strong>Price:</strong> {gym.price}
//                       </p>
//                       <p className="card-text">
//                         <strong>Rating:</strong> {gym.rating || "No rating available"}
//                       </p>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             ))
//           ) : (
//             <p className="text-center">No gyms found for this location.</p>
//           )}
//         </div>

//         <div className="col-md-6">
//           <MapView items={gyms} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

//design focused

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// // import { Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import "./HomePage.css";
// import MapView from "./MapView";
// import Navbar from "./Navbar";

// const HomePage = () => {
//   const [gyms, setGyms] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   // const navigate = useNavigate();

//   const fetchGyms = async (query = "") => {
//     try {
//       const response = await axios.get(`http://localhost:8080/gyms`, {
//         params: { location: query },
//       });
//       if (response.data.status === "success") {
//         setGyms(response.data.gyms);
//       }
//     } catch (error) {
//       console.error("Error fetching gyms", error);
//     }
//   };

//   useEffect(() => {
//     fetchGyms();
//   }, []);

//   const handleSearch = () => {
//     fetchGyms(searchQuery);
//   };

//   return (
//   <>
//   <Navbar/>
//     <div className="container mt-5">
//       {/* Navbar */}
//       {/* <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
//         <div className="container">
//           <Link className="navbar-brand" to="/">
//             Gym-Connect
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav mr-auto">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/about">
//                   About
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/contact">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//             <button
//               className="btn btn-outline-primary my-2 my-sm-0"
//               onClick={() => navigate("/profile")}
//               style={{
//                 borderRadius: "25px",
//                 padding: "5px 20px",
//                 fontWeight: "bold",
//               }}
//             >
//               Profile
//             </button>
//           </div>
//         </div>
//       </nav> */}

//       <h2 className="text-center mb-4">Available Gyms</h2>

//       <div className="search-bar mb-4 d-flex">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search by location"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button className="btn btn-primary ml-2" onClick={handleSearch}>
//           Search
//         </button>
//       </div>

//       <div className="row">
//         <div className="col-md-6">
//           {gyms.length > 0 ? (
//             gyms.map((gym) => (
//               <div className="col-md-12 mb-4" key={gym._id}>
//                 <Link to={`/gyms/${gym._id}`} className="gym-link">
//                   <div className="card h-100">
//                     {gym.images && gym.images.length > 0 && (
//                       <img
//                         src={gym.images[0]}
//                         alt={gym.name}
//                         className="card-img-top"
//                         style={{ maxHeight: "200px", objectFit: "cover" }}
//                       />
//                     )}
//                     <div className="card-body">
//                       <h5 className="card-title">{gym.name}</h5>
//                       <p className="card-text">
//                         <strong>Location:</strong> {gym.location}
//                       </p>
//                       <p className="card-text">
//                         <strong>Price:</strong> {gym.price}
//                       </p>
//                       <p className="card-text">
//                         <strong>Rating:</strong> {gym.rating || "No rating available"}
//                       </p>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             ))
//           ) : (
//             <p className="text-center">No gyms found for this location.</p>
//           )}
//         </div>

//         <div className="col-md-6">
//           <MapView items={gyms} />
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default HomePage;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./HomePage.css";
import MapView from "./MapView";
import Navbar from "./Navbar";


const HomePage = () => {
  const [gyms, setGyms] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchGyms = async (query = "") => {
    try {
      const response = await axios.get(`http://localhost:8080/gyms`, {
        params: { location: query },
      });
      if (response.data.status === "success") {
        setGyms(response.data.gyms);
      }
    } catch (error) {
      console.error("Error fetching gyms", error);
    }
  };

  useEffect(() => {
    fetchGyms();
  }, []);

  const handleSearch = () => {
    fetchGyms(searchQuery);
  };

  return (
    <>
      <Navbar />
      <div className="main-content container mt-5">
        <h2 className="text-center mb-4">Available Gyms</h2>

        <div className="search-bar mb-4 d-flex">
          <input
            type="text"
            className="form-control"
            placeholder="Search by location"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="btn btn-primary ml-2" onClick={handleSearch}>
            Search
          </button>
        </div>

        <div className="row">
          <div className="col-md-6">
            {gyms.length > 0 ? (
              gyms.map((gym) => (
                <div className="col-md-12 mb-4" key={gym._id}>
                  <Link to={`/gyms/${gym._id}`} className="gym-link">
                    <div className="card h-100">
                      {gym.images && gym.images.length > 0 && (
                        <img
                          src={gym.images[0]}
                          alt={gym.name}
                          className="card-img-top"
                          style={{ maxHeight: "200px", objectFit: "cover" }}
                        />
                      )}
                      <div className="card-body">
                        <h5 className="card-title">{gym.name}</h5>
                        <p className="card-text">
                          <strong>Location:</strong> {gym.location}
                        </p>
                        <p className="card-text">
                          <strong>Price:</strong> {gym.price}
                        </p>
                        <p className="card-text">
                          <strong>Rating:</strong> {gym.rating || "No rating available"}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-center">No gyms found for this location.</p>
            )}
          </div>

          <div className="col-md-6">
            <MapView items={gyms} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
