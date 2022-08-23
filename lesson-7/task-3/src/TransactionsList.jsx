import React from 'react';
import Transaction from './Transaction';
import './index.scss';

const TransactionsList = ({ transactions }) => (
  <ul className="transactions">
    {transactions.map(transaction => (
      <Transaction key={transaction.id} {...transaction} amount={transaction.amount} />
    ))}
  </ul>
);

export default TransactionsList;
