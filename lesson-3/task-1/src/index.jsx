import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './search.scss';
import Search from './search';

const rootElement = document.querySelector('#root');

const Greeting = props => {
  return <Search name={props.name} />;
};
ReactDOM.render(<Greeting name="Tom" />, rootElement);
