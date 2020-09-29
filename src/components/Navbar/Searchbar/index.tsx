import React, { SyntheticEvent, useContext, useRef } from "react";
import { WeatherAPIContext } from "../../../services/WeatherAPIContext";
import styles from "./Searchbar.module.css";

const Searchbar: React.FC = () => {
  const { setSearchCity } = useContext(WeatherAPIContext);
  const searchInput = useRef<HTMLInputElement>(null);

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (searchInput.current) {
      setSearchCity(searchInput.current.value);
      searchInput.current.value = "";
    }
  };

  return (
    <div className="container">
      <form className={styles.Searchbar} onSubmit={onSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Buscar una ciudad..."
          ref={searchInput}
        />
      </form>
    </div>
  );
};

export default Searchbar;
