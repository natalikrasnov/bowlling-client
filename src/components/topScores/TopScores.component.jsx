import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './TopScores.style.scss'
import axios from "axios";

function TopScores() {
    const location = useLocation()
    const navigate = useNavigate()
    const { userName, finalScore } = location.state ? location.state : {}
    const [scoresData, setScoresData] = useState(null)


    useEffect(() => {
        if(scoresData) return
        axios.get("http://localhost:3004/topScores").then(result => {
            console.log(result)
           debugger 
            if (result.data.status === 'ok') setScoresData(result.data.data)
            else alert("something wrong, ", result.message)
        })
    }, [])

    const startNewGame = () => {
        navigate('/welcome'  )
    }


    return (
        <div className="top-scores">
            {userName && finalScore && <label className='user-score'>{ userName}, Your Score is: <b>{ finalScore }</b></label>}
            <label className='title'><u>Top 5 scores:</u></label>
            {scoresData && scoresData.map((el, index) => 
                <div className='top-score_row'>
                    <label className='place'># {index+1}</label>
                    <label>{el.name}</label>
                    <span><label><b>{el.score}</b> </label>
                        <label>scores</label>
                    </span>
                    
                </div>
            )}
            <button onClick={startNewGame}>START NEW GAME</button>
        </div>
    )
}

export default TopScores
