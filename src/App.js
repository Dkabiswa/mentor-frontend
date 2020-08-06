import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Messages from "./views/messages"
import Home from './components';
import Discussions from './views/home';

const App = () => {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Discussions />
            </Route>
            <Route exact path="/messages">
              <Messages />
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
