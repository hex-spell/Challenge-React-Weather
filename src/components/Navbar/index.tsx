import React from "react";
import styles from "./Navbar.module.css";
import Searchbar from "./Searchbar";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.Navbar}>
      <Searchbar />
    </nav>
  );
};

export default Navbar;
