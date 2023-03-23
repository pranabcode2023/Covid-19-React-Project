import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import React from 'react';
import './Map.css';

class Map extends React.Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    axios
      .get('https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1')
      .then((res) => {
        const countries = res.data;
        this.setState({ countries });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { countries } = this.state;
    return (
      <MapContainer center={[0, 0]} zoom={2} className="map-container">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {countries.map((country) => (
          <CustomMarkers key={country.country} country={country} />
        ))}
      </MapContainer>
    );
  }
}

const CustomMarkers = ({ country }) => {
  const icon = new L.Icon({
    iconUrl: country.countryInfo.flag,
    iconSize: [30, 30],
  });

  return (
    <Marker
      position={[country.countryInfo.lat, country.countryInfo.long]}
      icon={icon}
      eventHandlers={{
        click: () => {
          console.log(`Marker clicked: ${country.country}`);
        },
      }}
      animate={true}
      bounceOnAdd={true}
      bounceOnAddOptions={{ duration: 500, height: 50, loop: 1 }}
    >
      <Popup>{country.country}</Popup>
    </Marker>
  );
};

export default Map;
