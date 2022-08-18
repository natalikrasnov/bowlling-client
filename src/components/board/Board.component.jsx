import {  useContext} from 'react'
import './Board.style.scss'

import { GameContext } from '../../context/Game.context'

function Board() {
    const boardState = Array(10).fill(Array(2).fill(null))
    const { scores } = useContext(GameContext);

    const GetElementByInput = ({ score , costumeClass}) => {
        switch (score) {
            case 'strike':
                return <label className={'strike '+costumeClass}></label>
            case 'spare':
                return <label className={'spare '+costumeClass}></label>
            default:
                return <label className={costumeClass}>{score}</label>
        }
    }

    return (
        <div className="board">
            {boardState.map((el, index) =>
                <div key={index} className='board-element'>
                    <GetElementByInput score={scores[index] ? scores[index][0] : ""} />
                    <GetElementByInput score={scores[index] ? scores[index][1] : ""} />
                    {index === boardState.length - 1 && <GetElementByInput costumeClass="bonus" score={scores[index] ? scores[index][2] : ""} />}
                     <GetElementByInput costumeClass='sum' score={scores[index] ? scores[index].sum : ""} />
                </div>
            )}
        </div>
    )
}

export default Board
