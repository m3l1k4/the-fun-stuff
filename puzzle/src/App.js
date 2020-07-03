import React from 'react';
import "./App.scss";
import Main from "./pages/Main";
import Game from "./pages/Game";
import Bridge from "./pages/Bridge"
import {Route,Switch, BrowserRouter as Router} from "react-router-dom";



class App extends React.Component {
  render() {
    return( 
      <Router>
        <Switch>
          <Route path="/" exact component={Main}/> 
          <Route path="/onewaytopuzzle" component={Game}/>
          <Route path="/manywaystocry" component={Bridge}/>
        </Switch> 
      </Router>
      
    )
  }
}



export default App;
