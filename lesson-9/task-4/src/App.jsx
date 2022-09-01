import React from 'react';
import UsersList from './UsersList';

const usersList = [
  {
    name: 'John',
    age: 17,
    id: 1,
  },
  {
    name: 'Sam',
    age: 30,
    id: 2,
  },
  {
    name: 'Tom',
    age: 20,
    id: 3,
  },
  {
    name: 'Sara',
    age: 28,
    id: 4,
  },
];
export default function App() {
  return <UsersList users={usersList} />;
}
