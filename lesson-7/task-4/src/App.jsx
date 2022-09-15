import React from 'react';
import UsersList from './UsersList';

const usersList = [
  {
    name: 'Ivan',
    age: 1,
    id: 1,
  },
  {
    name: 'Roman',
    age: 2,
    id: 2,
  },
  {
    name: 'Bob',
    age: 3,
    id: 3,
  },
  {
    name: 'Ivan',
    age: 4,
    id: 4,
  },
  {
    name: 'Mark',
    age: 5,
    id: 5,
  },
  {
    name: 'Svyat',
    age: 6,
    id: 6,
  },
  {
    name: 'Kolia',
    age: 7,
    id: 7,
  },
];

const App = () => <UsersList users={usersList} />;
export default App;
