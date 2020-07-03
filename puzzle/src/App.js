import React from 'react';
import axios from 'axios';
import "./App.scss";
import Main from "./pages/Main";
import Game from "./pages/Game";
import Bridge from "./pages/Bridge"
import {Route,Switch, BrowserRouter as Router} from "react-router-dom";



class App extends React.Component {

// state = {
//   puzzlePic:[]
// }


// componentDidMount(){
// axios.get(" https://api.thecatapi.com/v1/images/search")
// .then(res=>{
//   this.setState({puzzlePic:res.data[0].url})
//    console.log(res.data[0].url, "photoURL from app.js")
   
// })
// }


  render() {
    return( 
      
        <Switch>
          <Route path="/" exact component={Main}/> 
          <Route path="/manywaystocry" component={Game}  >
          
          </Route>

          <Route path="/manywaystocry" component={Bridge}/>
        </Switch> 
 
      
    )
  }
}



export default App;
