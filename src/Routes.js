import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import DogList from './Components/DogList';
import DogPost from './Components/DogPost';
import DogPut from './Components/DogPut';
import Vote from './Components/Vote';
import DogListClassComponent from './Components/DogListClassComponent';

const Routes = () => (
  <Switch>
    <Route path="/doglist" component={DogListClassComponent} />
    <Route path="/dogpost" component={DogPost} />
    <Route path="/dogput/:id" component={DogPut} />
    <Route exact path="/" component={Vote} />
  </Switch>

);
export default Routes;