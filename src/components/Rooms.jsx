import React from 'react';

// Componente Rooms
const Rooms = () => {
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
      title: 'Sala de Reuniones',
      image: 'https://via.placeholder.com/300x200?text=Sala+1',
    },
    {
      id: 6,
      title: 'Oficina Privada',
      image: 'https://via.placeholder.com/300x200?text=Oficina+Privada',
    },
    {
      id: 7,
      title: 'Área de Co-working',
      image: 'https://via.placeholder.com/300x200?text=Co-working',
    },
    {
      id: 8,
      title: 'Sala de Conferencias',
      image: 'https://via.placeholder.com/300x200?text=Conferencias',
    },
    {
      id: 9,
      title: 'Sala de Reuniones',
      image: 'https://via.placeholder.com/300x200?text=Sala+1',
    },
    {
      id: 10,
      title: 'Oficina Privada',
      image: 'https://via.placeholder.com/300x200?text=Oficina+Privada',
    },
    {
      id: 11,
      title: 'Área de Co-working',
      image: 'https://via.placeholder.com/300x200?text=Co-working',
    },
    {
      id: 12,
      title: 'Sala de Conferencias',
      image: 'https://via.placeholder.com/300x200?text=Conferencias',
    },
  ];

  return (
    <div className="w-full py-6">
      <h2 className="text-2xl font-bold text-center my-4">Rooms</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 bg-white"
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

export default Rooms;
