import { useState } from 'react'

import Egg from './Egg.tsx'
import Tamagotchi from './Tamagotchi.tsx'

// Need data from form to render Tamagotchi
// Need state data from app

export default function Home() {
  const [tamagotchi, setTamagotchi] = useState(false)

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
