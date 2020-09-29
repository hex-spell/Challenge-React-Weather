import React from "react";
import styles from "./Box.module.css";

// Este componente solamente sirve para estilizar, devuelve un section con forma de caja blanca
// desactivo proptypes porque children viene con React.FC y no me lo está detectando ESLint
// eslint-disable-next-line react/prop-types
const Box: React.FC = ({ children }) => {
  return <section className={styles.Box}>{children}</section>;
};

export default Box;
