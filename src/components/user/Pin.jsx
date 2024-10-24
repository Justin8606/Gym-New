// import React from 'react';
// import L from 'leaflet';
// import { Marker, Popup } from 'react-leaflet';
// import './Pin.css';

// // Create a custom icon for the marker
// const pinIcon = new L.Icon({
//   iconUrl: 'https://iconarchive.com/download/i116296/Material-Design/Map-Pin-Map-Pin.ico', // Change to your desired pin icon URL
//   iconSize: [25, 41], // Size of the icon
//   iconAnchor: [12, 41], // The point of the icon which will correspond to marker's location
//   popupAnchor: [1, -34], // The point from which the popup should open relative to the iconAnchor
// });

// const Pin = ({ item }) => {
//   return (
//     <Marker position={[item.latitude, item.longitude]} icon={pinIcon}>
//       <Popup>
//         <div>
//           <h5>{item.name}</h5>
//           <p>{item.location}</p>
//           <p>Price: ${item.price}</p>
//         </div>
//       </Popup>
//     </Marker>
//   );
// };

// export default Pin;

import React from 'react';
import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import './Pin.css';

// const pinIcon = new L.Icon({
//   iconUrl: 'https://iconarchive.com/download/i116296/Material-Design/Map-Pin-Map-Pin.ico',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
// });

const pinIcon = new L.Icon({
    iconUrl: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/solid/map-marker-alt.svg',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });
  

const Pin = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]} icon={pinIcon}>
      <Popup className="pin-popup">
        <div>
          <h5>{item.name}</h5>
          <p>{item.location}</p>
          <p>Price: ${item.price}</p>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;

