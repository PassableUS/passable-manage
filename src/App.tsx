import React from 'react';
import Login from './screens/Login';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import NotFound from './screens/NotFound';
import FirebaseAuthentication from './components/FirebaseAuthentication';
import Dashboard from './screens/Dashboard';

const App = () => {
  return (
    <>
      <FirebaseAuthentication />
      <Router>
        <Switch>
          <Route path="/login" children={<Login />} />
          <Route path="/dashboard" children={<Dashboard />} />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
