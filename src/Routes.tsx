import { Routes as RouterRoutes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Rooms from './pages/Rooms'

function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<Rooms />} />
    </RouterRoutes>
  )
}

export default Routes
