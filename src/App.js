import React, { Component } from 'react';
import { Route, Switch } from 'react-router'

import searchP from './pages/searchP'
import starP from './pages/starP'
import userP from './pages/userP'
import meP from './pages/meP'



class App extends Component {
  constructor(props) {
    super(props);
  }
  render(){
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={searchP} />
        <Route exact path="/user/login" component={userP} />
        <Route exact path="/user/me" component={meP} />
        <Route exact path="/star" component={starP} />
        <Route exact path="/search" component={searchP} />
        <Route exact path="/search/:key" component={searchP} />
      </Switch> 
    </div>
  )}
}



export default App;
