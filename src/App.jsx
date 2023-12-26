import { useState } from 'react'
import './App.css'
import Frases from './components/Frases'
import getRandomFromArr from './services/getRandomFromArr'
import phrases from './utils/phrases.json'
import ButtonPhrase from './components/ButtonPhrase'
import fondo from './utils/fondo.json'

function App() {

  const [phraseRandom, setPhraseRandom] = useState(getRandomFromArr(phrases)) //funciones se ejecutan con parentesis

  const [currentBg, setCurrentBg] = useState(getRandomFromArr(fondo))

  const objStyle = {
    backgroundImage:`url(../fondo${currentBg}.png)`
  }

  return (
      <main style={objStyle} className='app'>
        <h1 className='app__title'>Galleta de la fortuna</h1>
        <article className='app__card'>
        <Frases 
          phraseRandom={phraseRandom}
        />

        <ButtonPhrase 
        setPhraseRandom={setPhraseRandom}
        setCurrentBg={setCurrentBg}
        />        
        </article>
      </main>
  )
}

export default App
