import React from 'react';
import moment from 'moment';

const getDay = date => moment(date).format('D MMM');
const getTime = date => moment(date).format(' HH:mm');
const numberFormat = number => new Intl.NumberFormat('de-DE').format(number);

const Transaction = ({ from, to, amount, rate, time }) => (
  <li className="transaction">
    <span className="transaction__date">{getDay(time)}</span>
    <span className="transaction__time">{getTime(time)}</span>
    <span className="transaction__assets">
      {from} → {to}
    </span>
    <span className="transaction__rate">{rate}</span>
    <span className="transaction__amount">{numberFormat(amount)}</span>
  </li>
);

export default Transaction;
