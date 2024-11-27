import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/calendar.module.css'; // Asegúrate de importar tu archivo CSS

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const availableDates = [
    '2024-11-28',
    '2024-11-30',
    '2024-12-02',
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const tileDisable = ({ date, view }) => {
    if (view === 'month') {
      return date < new Date();
    }
    return false;
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const dateString = date.toISOString().split('T')[0];
      if (availableDates.includes(dateString)) {
        return 'bg-green-200 text-green-800 font-bold';
      }
    }
    return null;
  };

  return (
    <div className="calendarContainer">
      <div className="calendarBox">
        <h2 className="text-xl font-bold text-center mb-4">Selecciona una fecha</h2>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          tileDisabled={tileDisable}
          tileClassName={tileClassName}
        />
        <p className="mt-4 text-center">
          Fecha seleccionada:{' '}
          <span className="font-bold text-blue-500">
            {selectedDate.toLocaleDateString('es-ES', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CalendarComponent;
