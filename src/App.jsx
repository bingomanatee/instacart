import {Component} from 'react';
import style from './App.module.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './views/Login';
import Wizard from './views/Wizard';
import {Toolbar} from 'react-md';
import logo from './img/logo.png';
import Sorry from './views/Sorry';
import wrapComponentWithState from './state';
import {injectState} from 'freactal';
import AppView from './App.view';

class App extends Component {
  render () {
    return <AppView/>
  }
}

export default App;