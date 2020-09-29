import React from "react";
import WeatherPanel from "./components/WeatherPanel";
import Box from "./components/Layout/Box";
import Map from "./components/Map";
import WeatherAPIContextProvider from "./services/WeatherAPIContext";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <WeatherAPIContextProvider>
      <Navbar />
      <div className="container">
        <Box>
          <WeatherPanel />
        </Box>
        <Box>
          <Map />
        </Box>
      </div>
    </WeatherAPIContextProvider>
  );
};

export default App;
