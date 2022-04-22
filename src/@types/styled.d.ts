import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    rounded: string
    
    breakpoints: {
      large: string
      medium: string
      small: string
    }

    colors: {
      primary: string
      primaryHover: string
      white: string
      gray: string
      black: string
      background: string
    }
  }
}