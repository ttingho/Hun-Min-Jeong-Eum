import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage, LoginPage, SignUpPage, LookBoardPage, NotFoundPage, WriteBoardPage } from 'pages';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/login" component={LoginPage}/>
      <Route path="/signUp" component={SignUpPage}/>
      <Route path="/lookBoard" component={LookBoardPage}/>
      <Route path="/writeBoard" component={WriteBoardPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default App;