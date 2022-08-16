import { useState } from 'react'
import './Welcome.style.scss'

function Welcome({onInputEnter}) {

  return (
    <div className="welcome-page">
      <form onSubmit={onInputEnter}>
        <label >HELLO!</label>
        <label>Please enter your name to start the game:</label>
        <input placeholder='Your Full Name' />
        {/* <button type='submit'>Submit</button> */}
      </form>
     
    </div>
  )
}

export default Welcome
