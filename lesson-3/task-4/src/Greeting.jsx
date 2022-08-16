import React from 'react';
import moment from 'moment';
import './index.scss';

const Greeting = props => {
  const numbOfYears = moment().diff(props.birthDate, 'years', false);
  return (
    <div className="greeting">{`My name is ${props.firstName} ${props.lastName}. I'm ${numbOfYears} years old`}</div>
  );
};
export default Greeting;
