import React from "react";
import styles from "./App.module.css";
import WeatherPanel from "./components/WeatherPanel";
import Box from "./components/Layout/Box";
import Map from "./components/Map";
import WeatherAPIContextProvider from "./services/WeatherAPIContext";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <WeatherAPIContextProvider>
      <Navbar />
      <div className={styles.App}>
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
