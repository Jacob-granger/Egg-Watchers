
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

export interface Tamagotchi {
  name: string;
  image: string;
  personality: {id: number, name: string};
}

export interface TamagotchiContext {
  tamagotchi: Tamagotchi;
  setTamagotchi: React.Dispatch<React.SetStateAction<Tamagotchi>>;
}

export function App() {
  const [tamagotchi, setTamagotchi] = useState<Tamagotchi>();

  return (
    <div>
      <nav>
        <a href="/">
          <i className="fa-solid fa-house"></i>
        </a>
      </nav>
      <h1>Egg Watchers</h1>
      <p>Keep your lil bean alive</p>
      <Outlet context={{ tamagotchi, setTamagotchi }} />
    </div>
  )
}

export default App
