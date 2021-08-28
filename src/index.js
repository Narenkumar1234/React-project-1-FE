import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from "./Navbar";
import Brand from './Brands';
import RangeUsage from './RangeUsage';
import Upcoming from './Upcoming';
function App(){
  return (<div>
     <Navbar />
      <Brand />
  <RangeUsage />
  <Upcoming />
  </div>)
}

ReactDOM.render(
    <div>
    <App/>
    </div>,
  document.getElementById('root')
);

