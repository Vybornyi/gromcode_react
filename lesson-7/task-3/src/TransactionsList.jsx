import React from 'react';
import Transaction from './Transaction';
import './index.scss';

const TransactionsList = ({ transactions }) => (
  <ul className="transactions">
    {transactions.map(transaction => (
      <Transaction key={transactions.id} {...transaction} />
    ))}
  </ul>
);

export default TransactionsList;
