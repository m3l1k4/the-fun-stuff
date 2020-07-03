import React from 'react';
import "./Hero.scss";
import {Link} from "react-router-dom";
import Game from '../../pages/Game';


export default function Hero() {
    return (
        <div className="hero">
            <h2 className="hero__text"> Hover around to find your way out</h2>
           <Link to="game"  className="hero__button"> Reveal Puzzle</Link>
        </div>
    )
}
