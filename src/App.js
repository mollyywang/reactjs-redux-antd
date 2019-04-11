import React, { Component } from 'react';
import { Route, Switch } from 'react-router'

import searchP from './pages/searchP'
import starP from './pages/starP'
import userP from './pages/userP'



class App extends Component {

  constructor(props) {
    super(props);
  }
  render(){
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={searchP} />
        <Route exact path="/user" component={userP} />
        <Route exact path="/star" component={starP} />
        <Route exact path="/search" component={searchP} />
        <Route exact path="/search/:key" component={searchP} />
      </Switch> 
    </div>
  )}
}



export default App;
