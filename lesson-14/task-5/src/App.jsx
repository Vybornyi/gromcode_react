import React, { useState } from 'react';
import './index.scss';
import Clock from './Clock';

const App = () => {
  const [clockVisible, toogleClock] = useState(true);

  return (
    <>
      {clockVisible ? (
        <>
          <Clock location={'London'} offset={0} />
          <Clock location={'Kyiv'} offset={2} />
          <Clock location={'New York'} offset={-5} />
        </>
      ) : (
        ''
      )}
      <button onClick={() => toogleClock(!clockVisible)}>HIDE</button>
    </>
  );
};
export default App;
