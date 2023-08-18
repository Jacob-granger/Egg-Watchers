import { useState, useRef } from 'react'
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
  const [isPlaying, setIsPlaying] = useState(false)

  const songRef = useRef(new Audio('/sounds/song.mp3'))
  const song = songRef.current

  function toggleSound() {
    if (isPlaying) {
      song.pause()
    } else {
      song.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div>
      <nav>
        <a className="home-button" href="/">
          <i
            className="fa-solid fa-house fa-xs"
            style={{ color: '#ea4484' }}
          ></i>
        </a>
        <h1 className="logo">Egg Watchers</h1>
        <button className="sound-button" onClick={toggleSound}>
          <i
            className={`fa-solid fa-2xl ${
              isPlaying ? 'fa-volume-high' : 'fa-volume-mute'
            }`}
            style={{ color: '#f34484' }}
          ></i>
        </button>
      </nav>
      <div className="body-div">
        <Outlet context={{ tamagotchi, setTamagotchi }} />
      </div>
    </div>
  )
}

export default App
