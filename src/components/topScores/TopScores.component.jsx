import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './TopScores.style.scss'

function TopScores() {
    const location = useLocation()
    const { userName } = location.state ? location.state :{}

    const navigate = useNavigate()

    useEffect(() => {
        if (!userName) {
            alert("To see Top Scores you need to enter your name and play a game..")   
            navigate('/welcome'  )
        }
        console.log(location)
    }, [])


    return (
        <div className="top-scores">
           top scores
        </div>
    )
}

export default TopScores
