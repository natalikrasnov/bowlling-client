import { useState, useEffect, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from "axios";

import Board from '../board/Board.component'
import './MainGame.style.scss'
import { GameContext } from '../../context/Game.context'
import {addScoreAction} from '../../action/Game.action'
import Confetti from '../confetti/Confetti.componnent'


function MainGame() {
    const location = useLocation()
    const { userName } = location.state ? location.state :{}

    const navigate = useNavigate()

    const [isGameEnded, setIsGameEnded] = useState(false) 
    const { scores, dispatchScores } = useContext(GameContext);


    useEffect(() => { 
        if (!userName) {
            alert("please enter your name to start this game")   
            navigate('/welcome'  )
        }
    }, [])

    
    useEffect(() => {
        if(isGameEnded) return
        if (
            (
                (scores[scores.length - 1][1] === 'spare' && scores[scores.length - 1][2]) ||
                (scores[scores.length - 1][1] === 'strike' && scores[scores.length - 1][2])
            )
            ||
            ((scores[scores.length - 1][1] !== 'spare' && scores[scores.length - 1][1] !== 'strike')
                &&
               scores[scores.length - 1][0] !== 'strike'
                &&
                scores[scores.length - 1].sum)
            ||
            (scores[scores.length - 1][0] === 'strike' && scores[scores.length - 1][1] && scores[scores.length - 1][2]) 
        ) {
            endGame()
        }
            
    }, [scores])

    const endGame = () => {
        setIsGameEnded(true)
        //axios post=> add score to db    
        axios.post("http://localhost:3004/users", {name: userName, score: scores[scores.length - 1].sum})
    }

    const addNewScore = (event) => {
        event.preventDefault()
        
        let score = parseInt(event.target[0].value)
        event.target[0].value = ''
        if ((!score && score !== 0) || score > 10 || score < 0) return
        
        dispatchScores(addScoreAction(score))
       //
        
    }

    const goToScoresPage =  ( event ) => {
        event.preventDefault()
        navigate('/scores' ,{state:{userName, finalScore: scores[scores.length-1].sum}} )
    }

    return (
        <div className="main-game">
            {isGameEnded && <Confetti />}
            <label className='user-data'>welcome <b className='name'>{userName}</b></label>
            <Board/>
            {!isGameEnded && <form className='enter-score' onSubmit={addNewScore}>
                <input className='enter-score' type='number' placeholder='enter your score here'/>
                <button type='submit'>ADD</button>
            </form>}
            {isGameEnded && <label className='final-score'>your final score is: { scores[scores.length - 1].sum }</label>}
            <button className='to-scores' onClick={goToScoresPage}>TOP SCORES</button>
        </div>
    )
}

export default MainGame
