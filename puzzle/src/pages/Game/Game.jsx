import React from 'react';
import "./Game.scss";
import { Link } from "react-router-dom";



export default function Game({ puzzleImg }) {

    puzzleImg.map(potato=> console.log(potato.url,"potato"));

    return (

        puzzleImg.map(photo => {

            return <div >

            
                <div className="header">

                    <h1>Move the pieces</h1>

                </div>
                <div className="main">
                    <Link className="link" to="/"><h3>back to Main</h3></Link>



                    <img className="main__puzzle" src={photo.url}></img>

                    <div className= "puzzle"  >

                        <div id="table" className="puzzle-div" >
                            <div id="row1"  className=" puzze-div-row1">
                                <div id="cell11" className="tile1" onClick={() => {clickTile(1,1)}} style={{backgroundImage: "url(" + photo.url + ")"}} ></div>
                                <div id="cell12" className="tile2" onClick={() =>{clickTile(1,2)}} style={{backgroundImage: "url(" + photo.url + ")"}}></div>
                                <div id="cell13" className="tile3" onClick={() => {clickTile(1,3)}} style={{backgroundImage: "url(" + photo.url + ")"}}></div>
                            </div>
                            <div id="row2" className=" puzze-div-row2" >
                                <div id="cell21" className="tile4" onClick={ () => {clickTile(2,1)}} style={{backgroundImage: "url(" + photo.url + ")"}}></div>
                                <div id="cell22" className="tile5" onClick={ () => {clickTile(2,2)}} style={{backgroundImage: "url(" + photo.url + ")"}}></div>
                                <div id="cell23" className="tile6" onClick={ () => {clickTile(2,3)}} style={{backgroundImage: "url(" + photo.url + ")"}}></div>
                            </div>
                            <div id="row3" className=" puzze-div-row3" >
                                <div id="cell31" className="tile7" onClick={()=> {clickTile(3,1)}} style={{backgroundImage: "url(" + photo.url + ")"}}></div>
                                <div id="cell32" className="tile8" onClick={() => {clickTile(3,2)}} style={{backgroundImage: "url(" + photo.url + ")"}}></div>
                                <div id="cell33" className="tile9" onClick={ () => {clickTile(3,3)}} ></div>
                            </div>
                        </div>


                    </div>



                </div>
            </div>

        })


    )
}

export function btnTapped(a,b) {
    console.log('tapped');
}

export function swapTiles(cell1,cell2) {
    console.log(cell1,"cell1")
   let test= document.getElementById("cell11");
   console.log(test,"test")
    // var temp = document.getElementById(cell1).className;
    // document.getElementById(cell1).className = document.getElementById(cell2).className;
    // document.getElementById(cell2).className = temp;
  }
  
  
  //Use nested loops to access each cell of the 3x3 grid
  for (var row=1;row<=3;row++) { //For each row of the 3x3 grid
     for (var column=1;column<=3;column++) { //For each column in this row
    
      var row2=Math.floor(Math.random()*3 + 1); //Pick a random row from 1 to 3
      var column2=Math.floor(Math.random()*3 + 1); //Pick a random column from 1 to 3
       
      swapTiles("cell"+row+column,"cell"+row2+column2); //Swap the look & feel of both cells
    } 
  } 
  
  
 export function clickTile(row,column) {

    console.log(row,column)
    var cell = document.getElementById("cell"+row+column);
    var tile = cell.className;
    if (tile!="tile9") { 
         //Checking if white tile on the right
         if (column<3) {
           if ( document.getElementById("cell"+row+(column+1)).className=="tile9") {
             swapTiles("cell"+row+column,"cell"+row+(column+1));
             return;
           }
         }
         //Checking if white tile on the left
         if (column>1) {
           if ( document.getElementById("cell"+row+(column-1)).className=="tile9") {
             swapTiles("cell"+row+column,"cell"+row+(column-1));
             return;
           }
         }
           //Checking if white tile is above
         if (row>1) {
           if ( document.getElementById("cell"+(row-1)+column).className=="tile9") {
             swapTiles("cell"+row+column,"cell"+(row-1)+column);
             return;
           }
         }
         //Checking if white tile is below
         if (row<3) {
           if ( document.getElementById("cell"+(row+1)+column).className=="tile9") {
             swapTiles("cell"+row+column,"cell"+(row+1)+column);
             return;
           }
         } 
    }
    
  }