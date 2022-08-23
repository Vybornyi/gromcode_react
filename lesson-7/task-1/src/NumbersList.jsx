import React from 'react';

const NumbersList = ({ numbers }) => {
  const numbersList = numbers.map(number => <li>{number}</li>);
  return <ul>{numbersList}</ul>;
};
export default NumbersList;
