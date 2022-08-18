import React from 'react';
import Clock from './Clock';
import './index.scss';

const App = () => (
  <>
    <Clock offset={0} location={'London'} />
    <Clock offset={2} location={'Kyiv'} />
    <Clock offset={-5} location={'New York'} />
  </>
);
export default App;
