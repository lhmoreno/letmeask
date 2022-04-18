import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    values: {
      rounded: string
    }

    colors: {
      primary: {
        normal: string
        hover: string
      }
      background: {
        normal: string
        box: string
      }
      text: {
        normal: string
        description: string
        link: string
      }
      gray: {
        normal: string
        hover: string
      }
      danger: {
        normal: string
        hover: string
      }
    }
  }
}
