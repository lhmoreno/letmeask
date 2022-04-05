import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/theme'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { LoginWithEmail } from './pages/LoginWithEmail'
import { Register } from './pages/Register'
import { ForgotPassword } from './pages/ForgotPassword'
import { ChangePassword } from './pages/ChangePassword'
import { Room } from './pages/Room'
import { EnterRoom } from './pages/EnterRoom'
// import { AuthContextProvider } from './contexts/AuthContext'
import './styles/global.css'

function App() {
  return (
    <BrowserRouter>
      {/* <AuthContextProvider> */}
      <ThemeProvider theme={defaultTheme}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/login/email" element={<LoginWithEmail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/change-password" element={<ChangePassword />} />

          <Route path="/rooms" element={<EnterRoom />} />
          <Route path="/rooms/:id" element={<Room />} />
        </Routes>
      </ThemeProvider>
      {/* </AuthContextProvider> */}
    </BrowserRouter>
  )
}

export default App
