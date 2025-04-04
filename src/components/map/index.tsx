import React from "react";
import GoogleMapReact from "google-map-react";
import Title from "../title";
import Container from "../container";

// Define interface for marker props
interface MarkerProps {
  lat: number;
  lng: number;
  text: string;
}

// Custom marker component
const Marker: React.FC<MarkerProps> = ({ text }) => (
  <div style={{ color: "red", fontWeight: "bold" }}>{text}</div>
);

const LibraryMap: React.FC = () => {
  const defaultProps = {
    center: { lat: 41.2995, lng: 69.2401 },
    zoom: 6,
  };

  // Library locations
  const libraries = [
    { id: 1, name: "Library 1", lat: 41.2995, lng: 69.2401 }, // Tashkent
    { id: 2, name: "Library 2", lat: 40.1033, lng: 65.3735 }, // Bukhara
    { id: 3, name: "Library 3", lat: 40.7895, lng: 72.3586 }, // Namangan
  ];

  return (
    <Container style={{ width: "100%" }} className="my-12">
      <Title className="text-secondary text-center my-8">Bizning Kutubxonalar manzili</Title>
      <div className="my-12">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.6456768595212!2d69.22340757587835!3d41.38178227130058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d32144ea185%3A0xe184d354e821762b!2sPeshqadamlar%20Karvoni!5e0!3m2!1sen!2s!4v1743699613087!5m2!1sen!2s" width="100%" height="500" className="border:0;" loading="lazy"></iframe>
      </div>
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: "MY_GOOGLE_MAPS_API_KEY_SHALOLA" }} // Replace with your API key
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {libraries.map((library) => (
          <Marker key={library.id} lat={library.lat} lng={library.lng} text="Kutubxona" />
        ))}
      </GoogleMapReact> */}
    </Container>
  );
};

export default LibraryMap;
