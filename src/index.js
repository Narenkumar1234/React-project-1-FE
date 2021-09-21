import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from "./Navbar";
import Brand from './Brands';
import RangeUsage from './RangeUsage';
import Upcoming from './Upcoming';
import getSamsung from "./getSamsung";
import {  BrowserRouter as Router,  Route,  Link,  Switch } from 'react-router-dom';
function App(){
  return (
  <div>
    <Navbar />
    <Brand />
    <RangeUsage />
    <Upcoming />
  </div>)
}
ReactDOM.render(
    <div>
    <Router>
      <Route path="/" exact component={App}/>
      <Route path="/getSamsung" component={getSamsung} />
    </Router>
    </div>,
  document.getElementById('root')
);

