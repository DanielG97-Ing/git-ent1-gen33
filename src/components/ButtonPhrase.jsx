import phrases from '../utils/phrases.json'
import getRandomFromArr from '../services/getRandomFromArr'
import fondo from '../utils/fondo.json'

const ButtonPhrase = ({setPhraseRandom, setCurrentBg}) => {

    const handleClick = () => {
        setPhraseRandom(getRandomFromArr(phrases))
        setCurrentBg(getRandomFromArr(fondo))
      }

  return (
        <button 
          className='app__btn'
          onClick={handleClick}>
          Ver otro
        </button>
  )
}
export default ButtonPhrase