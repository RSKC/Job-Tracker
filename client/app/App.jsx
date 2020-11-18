import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import Dashboard from '../dashboard/Dashboard';
import NewApplication from '../newapplication/NewApplication';

import './app.scss';

const App = () => {
  return (
    <div className="router">
      <Router>
        <Navbar />
        <div className="switch">
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/new-application">
              <NewApplication />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
