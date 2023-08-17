// Parameters: name, personality, img
import { useState, useEffect } from 'react'
import { TamagotchiContext } from './App'
import { useOutletContext } from 'react-router-dom'

// const attributeStates = {
//   hunger: 100,
//   sleep: 100,
//   exercise: 100,
//   poo: false,
// }
//State variable
// const [tamState, setState] = useState(attributeStates)
//const handleStateChange = (event) =>{
// const name = event.target.name
//  setState({...tamState,})
//}

export default function Tamagotchi() {
  const TIMER_INTERVAL = 1000
  const TIMER_DECREMENT = 3
  const STATUS_INCREMENT = 20

  const [hunger, setHunger] = useState(100)
  const [sleep, setSleep] = useState(100)
  const [exercise, setExercise] = useState(100)
  const [poo, setPoo] = useState(false)

  const { tamagotchi } = useOutletContext<TamagotchiContext>()

  function handleFeedClick() {
    setHunger(hunger + STATUS_INCREMENT)
  }
  function handleExerciseClick() {
    setExercise(exercise + STATUS_INCREMENT)
  }
  function handleSleepClick() {
    setSleep(sleep + STATUS_INCREMENT)
  }
  function handlePooClick() {
    setPoo(false)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setHunger((prevProgress) =>
        prevProgress > 0 ? prevProgress - TIMER_DECREMENT : 0
      )
      setExercise((prevProgress) =>
        prevProgress > 0 ? prevProgress - TIMER_DECREMENT : 0
      )
      setSleep((prevProgress) =>
        prevProgress > 0 ? prevProgress - TIMER_DECREMENT : 0
      )
    }, TIMER_INTERVAL)
    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setPoo(!poo)
    }, 20000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div>
      <div> I am not a gucci Tamagotchi. Pls feed me</div>
      <p>Homie Page</p>
      <p>{tamagotchi && tamagotchi.name}</p>
      <img className="tamagotchi" src="/images/memetchi.jpg" alt="memetchi" />
      <div className="button-container">
        <button className="rubber-button" onClick={handleFeedClick}>
          Feed
        </button>
        <button className="rubber-button" onClick={handleExerciseClick}>
          Exercise
        </button>
        <button className="rubber-button" onClick={handleSleepClick}>
          Sleep
        </button>
        <button className="rubber-button" onClick={handlePooClick}>
          Relieve
        </button>
      </div>
      <div className="statusBars">
        <label>
          Hunger
          <progress className="statusBar" value={hunger} max="100" />
        </label>
        <label>
          Fitness
          <progress className="statusBar" value={exercise} max="100" />
        </label>
        <label>
          Energy
          <progress className="statusBar" value={sleep} max="100" />
        </label>
        {poo ? <i className="fa-solid fa-poo"></i> : <div></div>}
      </div>
    </div>
  )
}
//Buttons for updating status
//Status bars
//Tamagotchi image
//Tamagotcho info from form: Name, Personality, skin
