import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Board from '../board/Board.component'
import './MainGame.style.scss'

function MainGame() {
    const location = useLocation()
    const { userName } = location.state ? location.state :{}

    const navigate = useNavigate()

    const [scores, setScores] = useState((Array(10)).map(e=> ([null, null]))) 

    useEffect(() => {
        if (!userName) {
            alert("please enter your name to start this game")   
            navigate('/welcome'  )
        }
        console.log(location)
    }, [])

    const addNewScore = (event) => {
        event.preventDefault()
        console.log(scores)
        let score = event.target[0].value
        for (let i in scores) {
            console.log("i=>", i)
            if (!scores[i][0]) {
                scores[i][0] = score
                setScores(scores)
                return
            } else if(!scores[i][1]){
                scores[i][1] = score
                setScores(scores)
                return
            } 
        }
        
    }

    return (
        <div className="main-game">
           
            <label className='user-data'>welcome <b className='name'>{userName}</b></label>
            <Board scores={scores} />
            <form className='enter-score' onSubmit={addNewScore}>
                <input className='enter-score' placeholder='add your score please'/>
                <button type='submit'>ADD</button>
            </form>
        </div>
    )
}

export default MainGame
