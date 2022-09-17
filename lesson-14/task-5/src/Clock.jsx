import React, { useEffect, useState } from 'react';
import moment from 'moment';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};
const formatDate = date => moment(date).format('h:mm:ss A');

const Clock = ({ location, offset }) => {
  const [curentTime, setTime] = useState(formatDate(getTimeWithOffset(offset)));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(formatDate(getTimeWithOffset(offset)));
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{curentTime}</div>
    </div>
  );
};

export default Clock;
