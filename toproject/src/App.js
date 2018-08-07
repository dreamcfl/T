import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom"
import Home from "./components/home"
import Login from "./components/login"
import Dzxc from "./components/dzxc"
import Khpj from "./components/khpj"
import Mdd from "./components/mdd"
import Swkc from "./components/swkc"
class App extends Component {
  render() {
    return (
      <div>
       <Router>

         <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/dzxc" component={Dzxc}></Route>
              <Route path="/khpj" component={Khpj}></Route>
              <Route path="/mdd" component={Mdd}></Route>
              <Route path="/swkc" component={Swkc}></Route>
             <Redirect to="/home"/>
         </Switch>
       </Router>
  
      </div>
    )
  }
}

export default App;
