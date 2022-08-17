import { useEffect } from 'react'
import { useState } from 'react'
import './Board.style.scss'

function Board({ scores }) {

    const GetElementByInput = ({ score , costumeClass}) => {
        switch (score) {
            case 'strike':
                return <label className={'strike '+costumeClass}>{score}</label>
            case 'spare':
                return <label className={'spare '+costumeClass}>{score}</label>
            default:
                return <label className={costumeClass}>{score}</label>
        }
    }

    return (
        <div className="board">
            {scores.map((el, index) =>
                <div key={index} className='board-element'>
                    <GetElementByInput score={scores[index] ? scores[index][0] : ""} />
                    <GetElementByInput score={scores[index] ? scores[index][1] : ""} />
                    {index === scores.length - 1 && <GetElementByInput costumeClass="bonus" score={scores[index] ? scores[index].bonus : ""} />}
                     <GetElementByInput costumeClass='sum' score={scores[index] ? scores[index].sum : ""} />
                    
                </div>
            )}
        </div>
    )
}

export default Board
