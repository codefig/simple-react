import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Register from './Register';
import Login from "./Login";
import Home from "./Home";


class Router extends React.Component{

    render(){
        return(

            <BrowserRouter>
                   <Switch>
                       <Route exact path="/" component={Register}></Route>
                       <Route path="/login" component={Login}></Route>
                       <Route path="/home" component={Home}></Route>
                   </Switch>
                </BrowserRouter>
        )
    }
}

export default Router;
