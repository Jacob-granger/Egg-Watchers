import { Outlet } from 'react-router-dom'

export function App() {
  return (
    <div>
      <nav>
        <a href="/">
          <i className="fa-solid fa-house"></i>
        </a>
      </nav>
      <h1>Egg Watchers</h1>
      <p>Keep your lil bean alive</p>
      <Outlet />
    </div>
  )
}

export default App
