import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact={true} path='/' component={Home}/>
            <Route exact={true} path='/game' component={Game}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
