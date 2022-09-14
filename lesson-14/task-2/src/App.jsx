import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import User from './User';
import './index.scss';

const App = () => (
  <div className="page">
    <BrowserRouter>
      <div className="page__content">
        <Route path={'/'}>
          <h1>Users</h1>
          <ul className="navigation">
            <li className="navigation__item">
              <Link to="/users/github">Github</Link>
            </li>
            <li className="navigation__item">
              <Link to="/users/facebook">Facebook</Link>
            </li>
          </ul>
        </Route>
        <Route path={'/users/:userId'} component={User} />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
