import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { defaultTheme, GlobalStyle } from './theme'
import Home from './pages/Home'
import Login from './pages/account/Login'
import LoginWithEmail from './pages/account/LoginWithEmail'
import Register from './pages/account/Register'
import ForgotPassword from './pages/account/ForgotPassword'
import ChangePassword from './pages/account/ChangePassword'
import Room from './pages/rooms/Room'
import EnterRoom from './pages/rooms/EnterRoom'
// import { AuthContextProvider } from './contexts/AuthContext'
// import './styles/global.css'

function App() {
  return (
    <BrowserRouter>
      {/* <AuthContextProvider> */}
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/rooms/enter" element={<EnterRoom />} />

          <Route path="/login" element={<Login />} />
          <Route path="/login/email" element={<LoginWithEmail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/change-password" element={<ChangePassword />} />

          <Route path="/rooms/:id" element={<Room />} />
        </Routes>
      </ThemeProvider>
      {/* </AuthContextProvider> */}
    </BrowserRouter>
  )
}

export default App
