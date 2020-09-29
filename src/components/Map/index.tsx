import React, { useContext } from "react";
import GoogleMapReact from "google-map-react";
import { WeatherAPIContext } from "../../services/WeatherAPIContext";

const mapApiKey = process.env.REACT_APP_MAP_API_KEY || "";

const zoom = 13;

const Map: React.FC = () => {
  const {
    weatherData: {
      coord: { lon, lat },
    },
    isLoading,
  } = useContext(WeatherAPIContext);
  if (isLoading) {
    return <h1>Cargando mapa...</h1>;
  }
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: mapApiKey }}
        defaultZoom={zoom}
        defaultCenter={{ lng: 0, lat: 0 }}
        center={{ lng: lon, lat }}
      />
    </div>
  );
};

export default Map;
