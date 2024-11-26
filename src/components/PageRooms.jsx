import { useState, useEffect } from "react";


// Componente del carrusel
const HorizontalCardScroll = () => {
    

  const cardData = [

    {
    
      id: 1,
      title: 'Sala de Reuniones',
      image: 'https://via.placeholder.com/300x200?text=Sala+1',


    },
    {
      id: 2,
      title: 'Oficina Privada',
      image: 'https://via.placeholder.com/300x200?text=Oficina+Privada',
    },
    {
      id: 3,
      title: 'Área de Co-working',
      image: 'https://via.placeholder.com/300x200?text=Co-working',
    },
    {
      id: 4,
      title: 'Sala de Conferencias',
      image: 'https://via.placeholder.com/300x200?text=Conferencias',
    },
    {
        id: 5,
        title: 'Sala de Conferencias',
        image: 'https://via.placeholder.com/300x200?text=Conferencias',
      },
      {
        id: 6,
        title: 'Sala de Conferencias',
        image: 'https://via.placeholder.com/300x200?text=Conferencias',
      },
      {
        id: 7,
        title: 'Sala de Conferencias',
        image: 'https://via.placeholder.com/300x200?text=Conferencias',
      },
      {
        id: 8,
        title: 'Sala de Conferencias',
        image: 'https://via.placeholder.com/300x200?text=Conferencias',
      },
  ];
 
  return (
    <div className="w-full py-6 overflow-x-scroll scroll-smooth scrollbar-hide">
      <div className="flex space-x-4">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="min-w-[300px] rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 bg-white"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{card.title}</h3>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Reservar
              </button>
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
        // Obtenemos la fecha actual al cargar el componente
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
    <>
      <h1 className="text-3xl font-bold text-center my-4">Reserva tu Espacio</h1>
      <h2 className="text-3xl font-bold text-center my-4">{currentDate}</h2>
      <HorizontalCardScroll />
    </>
  );
};

export default PageRooms;
