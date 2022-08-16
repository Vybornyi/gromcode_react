import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import './styles.scss';

const rootElement = document.querySelector('#root');
const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars.githubusercontent.com/u/97849834?v=4',
};
ReactDOM.render(<Comment author={userInfo} text={text} date={date} />, rootElement);
