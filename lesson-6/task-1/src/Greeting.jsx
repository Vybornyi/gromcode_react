import React from 'react';
import GuestGreeting from './GuestGreeting';
import UserGreeting from './UserGreeting';

const Greeting = ({ isLoggedIn }) => <div>{isLoggedIn ? <GuestGreeting /> : <UserGreeting />}</div>;

export default Greeting;
