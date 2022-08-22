import React from 'react';
import GuestGreeting from './GuestGreeting';
import UserGreeting from './UserGreeting';

const Greeting = ({ isLoggedIn }) => <div>{isLoggedIn ? <UserGreeting /> : <GuestGreeting />}</div>;

export default Greeting;
