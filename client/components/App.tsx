import { useState } from 'react'
import { Outlet } from 'react-router-dom'

export interface Tamagotchi {
  name: string
  image: string
  personality: { id: number; name: string }
}

export interface TamagotchiContext {
  tamagotchi: Tamagotchi
  setTamagotchi: React.Dispatch<React.SetStateAction<Tamagotchi>>
}

export function App() {
  const [tamagotchi, setTamagotchi] = useState<Tamagotchi>()

  return (
    <div>
      <nav>
        <a className="home-button" href="/">
          <i className="fa-solid fa-house" style={{ color: '#ea4484' }}></i>
        </a>
        <h1 className="logo">Egg Watchers</h1>
      </nav>
      <div className="body-div">
        <Outlet context={{ tamagotchi, setTamagotchi }} />
      </div>
    </div>
  )
}

export default App
