import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      text: string
      link: string
      background: string
      gray: {
        dark: string
        medium: string
        light: string
      }
      hover: {
        primary: string
      }
    }
  }
}
