import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { UserProvider } from './contexts/UserContext'

import Routes from './Routes'

import GlobalStyle from './styles/globalStyle'
import { theme } from './styles/theme'

import './services/firebase'

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle theme={theme} />
            <Routes />
        </ThemeProvider>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
