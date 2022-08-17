import React from 'react';
import Counter from './Counter';
import './index.scss';

const App = () => (
  <>
    <Counter start={17} interval={1000} />
    <Counter start={-56} interval={100} />
    <Counter start={17} interval={2000} />
  </>
);
export default App;
