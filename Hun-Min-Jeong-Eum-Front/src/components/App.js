import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, LoginPage, SignUpPage, NotFoundPage } from 'pages';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage}/>
      <Route path="/signUp" component={SignUpPage}/>
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default App;