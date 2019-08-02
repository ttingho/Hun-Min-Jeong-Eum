import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, LoginPage, SignUpPage, NotFoundPage, WriteBoardPage } from 'pages';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage}/>
      <Route path="/signUp" component={SignUpPage}/>
      <Route path="/writeBoard" component={WriteBoardPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default App;