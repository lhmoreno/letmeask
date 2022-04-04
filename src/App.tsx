import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/theme'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
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
        </Routes>
      </ThemeProvider>
      {/* </AuthContextProvider> */}
    </BrowserRouter>
  )
}

export default App
