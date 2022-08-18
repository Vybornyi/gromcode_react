import React from 'react';
import Clock from './Clock';
import './index.scss';

const App = () => (
  <>
    <Clock offset={3} location={'New York'} />
    <Clock offset={4} location={'New York'} />
    <Clock offset={7} location={'New York'} />
  </>
);
export default App;
