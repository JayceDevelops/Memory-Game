import { useState } from 'react'
import './App.css'

import Header from './components/Header';
import Game from './components/Game.jsx';

function App() {

  const [current, setCurrent] = useState(0);
  const [best, setBest] = useState(0);


  return (
    <>
      <Header current={current} best={best}/>
      <Game />
    </>
  )
}

export default App
