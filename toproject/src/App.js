import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom"
import Home from "./components/home"
import Login from "./components/login"

class App extends Component {
  render() {
    return (
      <div>
       <Router>

         <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/login" component={Login}></Route>
             <Redirect to="/home"/>
         </Switch>
       </Router>
  
      </div>
    )
  }
}

export default App;
