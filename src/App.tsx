import React from 'react';
import Login from './screens/Login';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import NotFound from './screens/NotFound';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" children={<Login />} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
