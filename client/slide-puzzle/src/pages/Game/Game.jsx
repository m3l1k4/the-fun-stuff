import React from 'react';
import "./Game.scss";
import {Link} from "react-router-dom";
import puzzle from "../../components/Hero/puzzle-image.jpg";


export default function Game() {
    return (

        <>
        <div className="header">  
             
            <h1>Find the Puzzle</h1> 
            <h4>Solve the Puzzle</h4>
        </div>
        <div className="main">
            <Link className="link" to="/"><h3>back to Main</h3></Link>
            <img className="main__puzzle" src={puzzle}></img>  
        </div>
        </>

    )
}
