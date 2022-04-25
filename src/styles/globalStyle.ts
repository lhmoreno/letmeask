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
      backgroundColor: theme.colors.background
    },
    
    'body, input, textarea, button': {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '16px',
      color: theme.colors.black,
      [`@media (max-width: ${theme.breakpoints.small})`]: {
        fontSize: '14px'
      }
    },
    
    'h1, h2': {
      fontFamily: 'Poppins, sans-serif'
    },

    'input, textarea': {
      "::placeholder": {
        color: theme.colors.gray
      }
    }
  }
})

export default GlobalStyle
