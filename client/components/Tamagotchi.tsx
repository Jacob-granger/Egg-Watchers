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
  const deathSound = new Audio('/sounds/death.wav')

  const TIMER_INTERVAL = 1000
  const TIMER_DECREMENT = 5
  const STATUS_INCREMENT = 20

  const [hunger, setHunger] = useState(100)
  const [sleep, setSleep] = useState(100)
  const [exercise, setExercise] = useState(100)
  const [poo, setPoo] = useState(false)

  const { tamagotchi, setTamagotchi } = useOutletContext<TamagotchiContext>()

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
    const statusTimer = setInterval(() => {
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
      clearInterval(statusTimer)
    }
  }, [])

  useEffect(() => {
    const pooTimer = setInterval(() => {
      setPoo(!poo)
    }, 20000)
    return () => {
      clearInterval(pooTimer)
    }
  }, [])

  useEffect(() => {
    const checkPulse = setInterval(() => {
      if (hunger <= 0 && sleep <= 0 && exercise <= 0) {
        console.log('Dead')
        deathSound.play()
        setTamagotchi(false)
      }
    }, 1000)
    return () => {
      clearInterval(checkPulse)
    }
  })

  console.log(tamagotchi.image)

  return (
    <div>
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
      <div className="tamagotchiContainer">
        <div className="statusBars">
          <h3 className="tama-name">{tamagotchi && tamagotchi.name}</h3>
          <div className="status">
            <label className="statusLabel">
              Hunger
              <progress className="statusBar" value={hunger} max="100" />
            </label>
          </div>
          <div className="status">
            <label className="statusLabel">
              Fitness
              <progress className="statusBar" value={exercise} max="100" />
            </label>
          </div>
          <div className="status">
            <label className="statusLabel">
              Energy
              <progress className="statusBar" value={sleep} max="100" />
            </label>
          </div>
          {poo ? <i className="fa-solid fa-poo fa-lg"></i> : <div></div>}
        </div>
        <div className="device-parent">
          <img
            className="device"
            src="/images/tama-device-no-background.png"
            alt="tamagotchi device"
          />
          <img
            className="tamagotchi"
            src={`/images/${tamagotchi.image}`}
            alt="memetchi"
          />
        </div>
      </div>
    </div>
  )
}
//Buttons for updating status
//Status bars
//Tamagotchi image
//Tamagotcho info from form: Name, Personality, skin
