import React from 'react';
import Transaction from './Transaction';
import './index.scss';

const TransactionsList = ({ transactions }) => (
  <ul className="transactions">
    {transactions.map(transaction => (
      <Transaction
        key={transaction.id}
        from={transaction.from}
        to={transaction.to}
        amount={transaction.amount}
        rate={transaction.rate}
        time={transaction.time}
      />
    ))}
  </ul>
);

export default TransactionsList;
