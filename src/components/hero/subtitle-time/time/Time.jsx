import style from "./Time.module.css"
import React, { useState, useEffect } from 'react';
function Time(){
  const now = new Date();
  const [time, setTime] = useState({
    day: 0,
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        let { seconds, minutes, hours, day } = prevTime;

        seconds -= 1;
        if (seconds < 0) {
          seconds = 59;
          minutes -= 1;
        }
        if (minutes < 0) {
          minutes = 59;
          hours -= 1;
        }
        if (hours < 0) {
          hours = 23;
          day -= 1;
        }

        return {
          day: day < 0 ? 0 : day,
          hours,
          minutes,
          seconds,
        };
      });
    }, 1000);

    return () => clearInterval(interval); 
  }, []);
    return(
        <div className={style.times}>
            <div>
                <p className={style.title}>Days</p>
                <h1 className={style.number}>{time.day}</h1>
            </div>
            <p className={style.twopoints}>:</p>
            <div>
                <p className={style.title}>Hours</p>
                <h1 className={style.number}>{time.hours}</h1>
            </div>
            <p className={style.twopoints}>:</p>
            <div>
                <p className={style.title}>Minutes</p>
                <h1 className={style.number}>{time.minutes}</h1>
            </div>
            <p className={style.twopoints}>:</p>
            <div>
                <p className={style.title}>Seconds</p>
                <h1 className={style.number}>{time.seconds}</h1>
            </div>
        </div>
    )
}
export default Time;