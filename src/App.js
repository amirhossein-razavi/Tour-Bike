import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import ConfigureStore from './Redux/ConfigureStore';
import Auth from './View/Authorization'
import Main from './View/Main'
import Post from './View/Post'
import Upload from './View/Upload'
import checkAthentication from './View/checkAthentication'


const store = ConfigureStore();
const App = () => (

  <Provider store={store}>
    <Switch>
      <Route exact path="/" component={checkAthentication} />
      <Route exact path="/auth" component={Auth} />
      <Route path="/home" component={Main} />
      <Route path="/post" component={Post} />
      <Route path="/newPost" component={Upload} />
      <Redirect to="/" />
    </Switch>
  </Provider>
);

export default App;
