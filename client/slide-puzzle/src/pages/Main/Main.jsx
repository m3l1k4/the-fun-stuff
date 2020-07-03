import React from 'react';
import "./Main.scss";
import {Route,Switch, BrowserRouter as Router} from "react-router-dom";
import Header from "../../components/Header";
import Hero from "../../components/Hero";




class Main extends React.Component {



    render () {
       
        return (
            
            <>
                <Header/>
                <Hero/>
            </>

        )
    }
}
export default Main;
  