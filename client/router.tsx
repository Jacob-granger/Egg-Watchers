import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App.tsx'
import Home from './components/Home.tsx'
import CreateTam from './components/CreateTam.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/create" element={<CreateTam />} />
    </Route>
  )
)

export default router
