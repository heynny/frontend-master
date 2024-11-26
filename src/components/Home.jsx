import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Home.module.css";  // Importar el CSS Module

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.header}>Bienvenido a ReserverRooms</h1>
        <p className={styles.paragraph}>Aquí puedes agendar tu Room.</p>
        <button className={styles.button} onClick={()=>navigate('/PageRooms')}>Comenzar</button>
      </div>
    </div>
  );
};

export default Home;
