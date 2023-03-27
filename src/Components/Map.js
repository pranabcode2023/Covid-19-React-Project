// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import axios from 'axios';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import React from 'react';

// class Map extends React.Component {
//     state = {
//         countries: [],
//     };

//     componentDidMount() {
//         axios
//             .get('https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1')
//             .then((res) => {
//                 const countries = res.data;
//                 this.setState({ countries });
//             })
//             .catch((err) => {
//                 console.log('Error:', err.message);
//             });

//         // .catch((err) => {
//         //     console.log(err);
//         // });
//     }

//     render() {
//         const { countries } = this.state;
//         return (
//             <MapContainer center={[0, 0]} zoom={2} className="map-container">
//                 <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//                 {countries.map((country) => (
//                     <CustomMarkers key={country.country} country={country} />
//                 ))}
//             </MapContainer>
//         );
//     }
// }

// const CustomMarkers = ({ country }) => {
//     const icon = new L.Icon({
//         iconUrl: country.countryInfo.flag,
//         iconSize: [30, 30],
//     });

//     const vaccineCoverage = country.timeline[Object.keys(country.timeline)[0]];
//     const vaccineColor = getVaccineColor(vaccineCoverage);

//     return (
//         <Marker
//             position={[country.countryInfo.lat, country.countryInfo.long]}
//             icon={icon}
//             eventHandlers={{
//                 click: () => {
//                     console.log(`Marker clicked: ${country.country}`);
//                 },
//             }}
//             animate={true}
//             bounceOnAdd={true}
//             bounceOnAddOptions={{ duration: 500, height: 50, loop: 1 }}
//         >
//             <Popup>
//                 <div>
//                     <p>{country.country}</p>
//                     <p>Vaccine Coverage: {vaccineCoverage}%</p>
//                 </div>
//             </Popup>
//         </Marker>
//     );
// };

// const getVaccineColor = (vaccineCoverage) => {
//     if (vaccineCoverage >= 80) {
//         return 'green';
//     } else if (vaccineCoverage >= 60) {
//         return 'yellow';
//     } else if (vaccineCoverage >= 40) {
//         return 'orange';
//     } else {
//         return 'red';
//     }
// };

// export default Map;


import React from 'react'

const Map = () => {
    return (
        <div>

            <h1>Vaccine Map</h1>
        </div>
    )
}

export default Map

