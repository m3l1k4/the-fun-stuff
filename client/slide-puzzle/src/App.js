import React from 'react';
import "./App.scss";
import Main from "./pages/Main";
import Game from "./pages/Game";
import {Route,Switch, BrowserRouter as Router} from "react-router-dom";



class App extends React.Component {
  render() {
    return( 
      <Router>
        <Switch>
          <Route path="/" exact component={Main}/> 
          <Route path="/game" component={Game}/>
        </Switch> 
      </Router>
      
    )
  }
}



export default App;
