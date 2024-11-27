import { useState, useEffect } from "react";
import CalendarComponent from "./CalendarComponent";
import Rooms from "./Rooms";
import Footer from "./Footer";
import styles from "../styles/PageRoom.module.css"; // Importa el CSS

// Componente del carrusel
const HorizontalCardScroll = () => {
  const cardData = [
    { id: 1, title: 'Sala de Reuniones', image: require('../img/salas/sala1.png') },
    { id: 2, title: 'Oficina Privada', image: require('../img/salas/sala2.png') },
    { id: 3, title: 'Área de Co-working', image: require('../img/salas/sala3.png') },
    { id: 4, title: 'Sala de Conferencias', image: require('../img/salas/sala4.png') },
    { id: 5, title: 'Sala de Conferencias', image: require('../img/salas/sala5.png') },
    { id: 6, title: 'Sala de Conferencias', image: require('../img/salas/sala6.png') },
    { id: 7, title: 'Sala de Conferencias', image: require('../img/salas/sala7.png') },
    { id: 8, title: 'Sala de Conferencias', image: require('../img/salas/sala8.png') },
  ];

  return (
    <div className="w-full py-6 overflow-x-scroll scroll-smooth scrollbar-hide">
      <div className="flex space-x-4">
        {cardData.map((card) => (
          <div key={card.id} className={`${styles.cardContainer} min-w-[300px]`}>
            <img
              src={card.image}
              alt={card.title}
              className={`${styles.cardImage}`}
            />
            <div className="p-4">
              <h3 className={`${styles.cardTitle}`}>{card.title}</h3>
              <button className={`${styles.reserveButton}`}>Reservar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Componente principal
const PageRooms = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Reserva tu Espacio</h1>
      <h2 className={styles.pageDate}>{currentDate}</h2>
      <HorizontalCardScroll />
      <h1 className={styles.pageTitle}>Reserva tu Espacio</h1>
      <CalendarComponent />
      <Rooms />
      <Footer />
    </div>
  );
};

export default PageRooms;
