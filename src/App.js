import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import { Button,Layout } from 'antd';
import { Route, Link } from 'react-router-dom'
import Search from './containers/search'
import Results from './containers/results'

const {Header, Footer,Content} = Layout;


class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Header>header</Header>
            <Content>
              <Route exact path="/" component={Search} />
              <Route exact path="/results" component={Results} />
            </Content>
          <Footer>footer</Footer>
        </Layout>
      </div>
    );
  }
}


export default App;
