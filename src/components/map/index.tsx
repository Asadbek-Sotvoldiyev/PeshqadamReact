import React from "react";
import GoogleMapReact from "google-map-react";
import Title from "../title";
import Container from "../container";

interface MarkerProps {
  lat: number;
  lng: number;
  text: string;
}

const Marker: React.FC<MarkerProps> = ({ text }) => (
  <div style={{ color: "red", fontWeight: "bold" }}>{text}</div>
);

const LibraryMap: React.FC = () => {
  const defaultProps = {
    center: { lat: 41.2995, lng: 69.2401 }, 
    zoom: 6,
  };

  const libraries = [
    { id: 1, name: "Library 1", lat: 41.2995, lng: 69.2401 }, 
    { id: 2, name: "Library 2", lat: 40.1033, lng: 65.3735 },
    { id: 3, name: "Library 3", lat: 40.7895, lng: 72.3586 }, 
  ];

  return (
    <Container style={{ width: "100%" }} className="my-12">
      <Title className="text-secondary text-center my-8">Bizning Kutubxonalar manzili</Title>
      <div style={{ height: "500px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "MY_GOOGLE_MAPS_API_KEY_SHALOLA" }} 
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {libraries.map((library) => (
            <Marker
              key={library.id}
              lat={library.lat}
              lng={library.lng}
              text={library.name}
            />
          ))}
        </GoogleMapReact>
      </div>
    </Container>
  );
};

export default LibraryMap;