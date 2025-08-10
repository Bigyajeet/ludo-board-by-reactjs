import { useState } from "react";

export default  function LudoBoard(){
    let[moves,setMoves]=useState({yellow:0,blue:0,red:0,green:0});
    let updateblue=()=>{
        console.log(`bluemoves:${moves.blue}`)
        // setMoves({...moves,blue : moves.blue+1});
        setMoves((prevMoves)=>{
            return    {...prevMoves,blue:prevMoves.blue+1};
        })
    };

    let updatered=()=>{
        console.log(`bluemoves:${moves.red}`)
        setMoves((prevMoves)=>{
            return    {...prevMoves,red:prevMoves.red+1};
        })
    };

let updategreen=()=>{
        console.log(`greenmoves:${moves.green}`)
        setMoves((prevMoves)=>{
            return    {...prevMoves,green:prevMoves.green+1};
        })
    };
    
    let updateyellow=()=>{
        console.log(`yellowmoves:${moves.yellow}`)
        setMoves((prevMoves)=>{
            return    {...prevMoves,yellow:prevMoves.yellow+1};
        })
    };

    return (
        <div>
        <p>Game begins</p>
        <div className="Board">
            <p>Blue moves={moves.blue}</p>
            <button style={{backgroundColor:"blue" } } onClick={updateblue}>+1</button>
            <p>Red moves={moves.red}</p>
            <button style={{ backgroundColor:"red" }} onClick={updatered}>+1</button>
            <p>Green moves={moves.green}</p>
            <button style={{ backgroundColor:"green" }}onClick={updategreen}>+1</button>
            <p>Yellow moves={moves.yellow}</p>
            <button style={{ backgroundColor:"yellow",color:"black"}}onClick={updateyellow}>+1</button>
        </div>
        </div>
    )
}