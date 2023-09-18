import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])
  const [remainingGuesses, setRemainingGuesses] = useState(5);


  const handleClick = (selectedIndex) => {
    //return something

    //treasure location
    let treasureIndex = Math.floor(Math.random() * board.length);
    
    if(treasureIndex === selectedIndex) {

      board[selectedIndex]= "☀️"
      setBoard([...board])
      alert("You win")
    } else if (treasureIndex === selectedIndex){
      board[selectedIndex]= "🏖️"
      setBoard([...board])
      alert("You lose")
    } else {
      
    }
  }

 


  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <Square board={board} handleClick={handleClick}/>
      <button>Reset Game</button>
    </>
  )
}

export default App
