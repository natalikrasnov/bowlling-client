import { useState } from 'react'

import './App.css'
import Welcome from './components/welcome/WelcomePage.component'
import MainGame from './components/mainGame/MainGame.component'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageNotFound from './components/notFound/PageNotFound.component';
import MainGameRouter from './routers/MainGame.router';
import TopScores from './components/topScores/TopScores.component';
import  GameContextProvider  from './context/Game.context';

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/welcome" element={<Welcome/>}/>
          <Route path="/game" element={
            <GameContextProvider>
              <MainGameRouter path='/welcome'>
                 <MainGame />
              </MainGameRouter>
            </GameContextProvider>
          } />
        <Route path="/scores" element={<TopScores />}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App
