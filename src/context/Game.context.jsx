import React, { createContext, useReducer } from 'react';
import GameReducer, { scoresInitialState  } from '../reducer/Game.reducer';

export const GameContext = createContext();

const GameContextProvider = (props) => {
    const [scores, dispatchScores] = useReducer(GameReducer, scoresInitialState());

    return (
        <GameContext.Provider value={ { scores, dispatchScores } }>
            {props.children }
        </GameContext.Provider>
    );
}; 

export default GameContextProvider;