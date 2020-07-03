import React from 'react';
import axios from 'axios';
import "./App.scss";
import Main from "./pages/Main";
import Game from "./pages/Game";
import Bridge from "./pages/Bridge"
import {Route,Switch, BrowserRouter as Router} from "react-router-dom";



class App extends React.Component {

state = {
  puzzlePic:[1]
}


componentDidMount(){
axios.get(" https://api.thecatapi.com/v1/images/search")
.then(res=>{
  this.setState({puzzlePic:res.data})
})
}


  render() {
    return( 
      
  
  
        <Switch>
          <Route path="/" exact component={Main}/> 
          <Route path="/onewaytopuzzle"   >
        <Game puzzleImg={this.state.puzzlePic}/>
          </Route>
          <Route path="/manywaystocry" component={Bridge}/>
        </Switch> 
 
      
    )
  }
}



export default App;
