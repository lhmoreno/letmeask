import styled from 'styled-components'

export const Container = styled.input(({ theme }) => {
  return {
    width: '100%',
    height: '50px',
    padding: '0px 16px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: theme.colors.gray,
    borderRadius: theme.rounded,
    "::placeholder": {
      color: theme.colors.gray
    },
    ":focus-visible": {
      outlineColor: theme.colors.primary
    }
  }
})
