import React from 'react';
    const HorizontalCardScroll = () => {

  const cardData = [

    {
      id: 1,
      title: 'Sala de Reuniones',
      image: require('../img/salas/sala1.png'),


    },
    {
      id: 2,
      title: 'Oficina Privada',
      image: require('../img/salas/sala2.png'),
    },
    {
      id: 3,
      title: 'Área de Co-working',
      image: require('../img/salas/sala3.png'),
    },
    {
      id: 4,
      title: 'Sala de Conferencias',
      image: require('../img/salas/sala4.png'),
    },
    {
        id: 5,
        title: 'Sala de Conferencias',
        image: require('../img/salas/sala5.png'),
      },
      {
        id: 6,
        title: 'Sala de Conferencias',
        image: require('../img/salas/sala6.png'),
      }
  ];

  return (
    <div className="w-full py-6 overflow-x-scroll scroll-smooth scrollbar-hide">
      <div className="flex space-x-4">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="min-w-[400px] rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 bg-white"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{card.title}</h3>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" onClick={()=>{}}
                
              >
                Reservar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Events = () => {

    return (
        <>
         <h1 className="text-3xl font-bold text-center my-4">Eventos</h1>
            <HorizontalCardScroll/>
        </>
    );
}

export default Events;
