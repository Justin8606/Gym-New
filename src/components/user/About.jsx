// import React from "react";
// import "./About.css"; // Make sure to create this CSS file
// import Navbar from "./Navbar";

// const About = () => {
//   return (
//     <div className="about-container">
//       <Navbar /> {/* Add Navbar here */}

//       <header className="about-header">
//         <h1>About GymConnect</h1>
//         {/* <p>Your ultimate platform for gym bookings and fitness connections.</p> */}
//         <p className="">Transform Your Body, Elevate Your Life.</p>
//       </header>

//       <section className="about-content">
//         <h2>Our Mission</h2>
//         <p>
//           At GymConnect, we strive to make fitness accessible and enjoyable for everyone. Our mission is to connect fitness enthusiasts with local gyms, making it easier than ever to find the right place to achieve your fitness goals.
//         </p>
//       </section>

//       <section className="about-content">
//         <h2>Our Vision</h2>
//         <p>
//           We envision a world where everyone has the opportunity to lead a healthy lifestyle. By simplifying the gym booking process, we aim to create a community of fitness lovers who inspire and support each other.
//         </p>
//       </section>

//       <section className="about-content">
//         <h2>Why Choose Us?</h2>
//         <ul>
//           <li>🏋️‍♀️ Wide selection of gyms to choose from</li>
//           <li>📅 Easy booking process</li>
//           <li>💬 User feedback</li>
//           <li>🔔 Notifications for new offers and updates</li>
//         </ul>
//       </section>

//       <footer className="about-footer">
//         <p>© {new Date().getFullYear()} GymConnect. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default About;


//design oriented

import React from "react";
import "./About.css"; // Make sure to create this CSS file
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar /> {/* Navbar is outside the main container now */}

      <div className="about-container">
        <header className="about-header">
          <h1>About GymConnect</h1>
          <p>Transform Your Body, Elevate Your Life.</p>
        </header>

        <section className="about-content">
          <h2>Our Mission</h2>
          <p>
            At GymConnect, we strive to make fitness accessible and enjoyable for everyone. Our mission is to connect fitness enthusiasts with local gyms, making it easier than ever to find the right place to achieve your fitness goals.
          </p>
        </section>

        <section className="about-content">
          <h2>Our Vision</h2>
          <p>
            We envision a world where everyone has the opportunity to lead a healthy lifestyle. By simplifying the gym booking process, we aim to create a community of fitness lovers who inspire and support each other.
          </p>
        </section>

        <section className="about-content">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>🏋️‍♀️ Wide selection of gyms to choose from</li>
            <li>📅 Easy booking process</li>
            <li>💬 User feedback</li>
            <li>🔔 Notifications for new offers and updates</li>
          </ul>
        </section>

        <footer className="about-footer">
          <p>© {new Date().getFullYear()} GymConnect. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default About;
