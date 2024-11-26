import React, {Route} from "react";
import styles from "../styles/Home.module.css";  // Importar el CSS Module
import Register from "./Register";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.header}>Bienvenido a ReserverRooms</h1>
        <p className={styles.paragraph}>Aquí puedes agendar tu Room.</p>
        <button className={styles.button} onClick={

<Route path="/register" element={<Register />} />
        }>Comenzar</button>
      </div>
    </div>
  );
};

export default Home;
