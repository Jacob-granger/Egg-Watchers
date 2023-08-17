// Parameters: name, personality, img
import { useState, useEffect } from 'react'
import { TamagotchiContext } from "./App";
import { useOutletContext } from "react-router-dom";

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
  const [hunger, setHunger] = useState(100)
  const [sleep, setSleep] = useState(100)
  const [exercise, setExercise] = useState(100)
  const [poo, setPoo] = useState(false)

  const { tamagotchi } = useOutletContext<TamagotchiContext>();

  function handleFeedClick() {
    setHunger(hunger + 20)
  }
  function handleExerciseClick() {
    setExercise(exercise + 50)
  }
  function handleSleepClick() {
    setSleep(100)
  }
  function handlePooClick() {
    setPoo(false)
  }

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     console.log('Called after 1 sec!')
  //     setExercise(exercise - 2)
  //     setHunger(hunger - 2)
  //     setSleep(sleep - 2)
  //   }, 1000)

  //   return () => clearTimeout(timeout)
  // }, [])

  // const timeout = setTimeout(() => {
  //   console.log('Called after 1 sec!')
  //   setExercise(exercise - 2)
  //   setHunger(hunger - 2)
  //   setSleep(sleep - 2)
  // }, 1000)

  // const timeoutPoo = setTimeout(() => {
  //   setPoo(true)
  // }, 10000)

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
