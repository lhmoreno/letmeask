import { Routes as RouterRoutes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Rooms from './pages/Rooms'
import Room from './pages/Room'

function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/rooms/:id" element={<Room />} />
    </RouterRoutes>
  )
}

export default Routes
