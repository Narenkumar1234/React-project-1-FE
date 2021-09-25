import React from "react";
import GetSamsung from "./GetSamsung";
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
        <Route  path="/getSamsung" exact component={withRouter(GetSamsung)}></Route>
    </Switch>
   </Router>
    </>
)}

export default App;