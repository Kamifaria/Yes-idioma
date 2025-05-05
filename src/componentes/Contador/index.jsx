import React, { useState, useEffect } from 'react';
import style from './style.module.css';

function CountdownTimer({ targetDate }) {
  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    if (timeDifference > 0) {
      const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hoursRemaining = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);

      return { days: daysRemaining, hours: hoursRemaining, minutes: minutesRemaining, seconds: secondsRemaining };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className={style.contador}>
        <span><b>{timeRemaining.days}</b>Dias </span>
        <span><b>{timeRemaining.hours < 10 ? `0${timeRemaining.hours}` : timeRemaining.hours}</b>Horas</span>
        <span><b>{timeRemaining.minutes < 10 ? `0${timeRemaining.minutes}` : timeRemaining.minutes}</b>  Minutos</span>
        <span><b>{timeRemaining.seconds < 10 ? `0${timeRemaining.seconds}` : timeRemaining.seconds}</b> Segundos</span>
      </div>
    </div>
  );
}

export default CountdownTimer;
