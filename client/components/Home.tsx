import { useState } from 'react'
import { TamagotchiContext } from './App'
import { useOutletContext } from 'react-router-dom'

import Egg from './Egg.tsx'
import Tamagotchi from './Tamagotchi.tsx'

// Need data from form to render Tamagotchi
// Need state data from app

export default function Home() {
  const { tamagotchi } = useOutletContext<TamagotchiContext>()

  return (
    <>
      <div>Homie Page</div>
      <img
        className="device"
        src="/images/tama-device.png"
        alt="tamagotchi device"
      />
      <br />
      {tamagotchi ? <Tamagotchi /> : <Egg />}
    </>
  )
}
