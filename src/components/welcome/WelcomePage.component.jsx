import { useState } from 'react'
import './Welcome.style.scss'

import { useNavigate } from 'react-router-dom'

function Welcome({ onInputEnter }) {
  
  const navigate = useNavigate()

  const GoToGame = ( event ) => {
    event.preventDefault()
    
    navigate('/game' ,{state:{userName: event.target[0].value}} )
  }
  return (
    <div className="welcome-page">
      <form onSubmit={GoToGame}>
        <label >HELLO!</label>
        <label>Please enter your name to start the game:</label>
        <input placeholder='Your Full Name' />
        <button type='submit'>start</button>
      </form>
     
    </div>
  )
}

export default Welcome
