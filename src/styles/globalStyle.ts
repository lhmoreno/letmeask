import { createGlobalStyle, DefaultTheme } from 'styled-components'

interface Theme {
  theme: DefaultTheme
}

const GlobalStyle = createGlobalStyle<Theme>(({ theme }) => {
  return {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box'
    },
  
    'body': {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '16px',
      backgroundColor: theme.colors.background,
      [`@media (max-width: ${theme.breakpoints.small})`]: {
        fontSize: '14px'
      }
    },

    'h1': {
      fontFamily: 'Poppins, sans-serif'
    }
  }
})

export default GlobalStyle
