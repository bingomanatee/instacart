import {Component} from 'react';
import style from './App.module.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './views/Login';
import Wizard from './views/Wizard';
import {Toolbar} from 'react-md';
import logo from './img/logo.png';
import Sorry from './views/Sorry';
import Start from './views/Start';
import wrapComponentWithState from './state';
import {injectState} from 'freactal';
import Background from './views/Background';
import Shop from './views/Shop';

const AppView = () => <div className={style['page-frame']}>
  <Toolbar title="" nav={<img src={logo} style={({width: 447 / 2, height: 90 / 2})}/>}></Toolbar>
  <h1 className={style['headline']}><Sorry>Welcome to Candian InstaCart!</Sorry></h1>
  <BrowserRouter>
    {/* here's a div */}
    <div>
      {/* here's a Route */}
      <Route path="/" exact component={Start}/>
      <Route path="/apply" component={Login}/>
      <Route path="/background" component={Background}/>
      <Route path="/wizard" component={Wizard}/>
      <Route path="/shop" component={Shop}/>
    </div>
  </BrowserRouter>
</div>;

export default wrapComponentWithState(injectState(AppView));