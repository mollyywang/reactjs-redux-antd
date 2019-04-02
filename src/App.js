import React, { Component } from 'react';
import { Route, Switch } from 'react-router'

import searchP from './pages/searchP'
import starP from './pages/starP'
import aboutP from './pages/aboutP'



class App extends Component {

  constructor(props) {
    super(props);
  }
  render(){
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={searchP} />
        <Route exact path="/about" component={aboutP} />
        <Route exact path="/star" component={starP} />
        <Route exact path="/search" component={searchP} />
        <Route exact path="/search/:key" component={searchP} />
      </Switch> 
    </div>
  )}
}



export default App;
