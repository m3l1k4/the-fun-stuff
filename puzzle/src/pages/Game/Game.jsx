import React from 'react';
import "./Game.scss";
import { Link } from "react-router-dom";



export default function Game({puzzleImg}) {

    return (

        puzzleImg.map(photo => {
        
            return <div >

            
                <div className="header">

                    <h1>Move the pieces</h1>

                </div>
                <div className="main">
                    <Link className="link" to="/"><h3>back to Main</h3></Link>
                    <img className="main__puzzle" src={photo.url}></img>
                </div>
            </div>

         })


    )
}
