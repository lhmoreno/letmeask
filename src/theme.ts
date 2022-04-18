import { DefaultTheme, createGlobalStyle } from 'styled-components'

export const defaultTheme: DefaultTheme = {
  values: {
    rounded: '8px'
  },

  colors: {
    primary: {
      normal: '#835AFD',
      hover: '#6F4BD8'
    },
    background: {
      normal: '#F8F8F8',
      box: '#FFFFFF'
    },
    text: {
      normal: '#29292E',
      description: '#737380',
      link: '#E559F9'
    },
    gray: {
      normal: '#DBDCDD',
      hover: '#CECECE'
    },
    danger: {
      normal: '#E73F5D',
      hover: '#D73754'
    }
  }
}

export const GlobalStyle = createGlobalStyle({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  'body': {
    backgroundColor: defaultTheme.colors.background.normal
  },
  'body, button, input, textarea': {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',
    color: defaultTheme.colors.text.normal
  },
  'h1, h2, h3': {
    fontFamily: 'Poppins, sans-serif'
  }
})
