import React from "react";
import Filter from "./Filter"

import {  BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { withRouter } from "react-router";
import Home from "./Home";

function App(){
const history = createBrowserHistory();
return (
    <>
    <Router>
    <Switch history={history} >
        <Route  path="/" exact component={Home}></Route>
        <Route  path="/getMobilePhone" exact component={withRouter(Filter)}></Route>
    </Switch>   
   </Router>
    </>
)}

export default App;