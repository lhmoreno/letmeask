import styled from 'styled-components'

export const Container = styled.div(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  }
})

export const Label = styled.label(({ theme }) => {
  return {
    fontWeight: '500'
  }
})

export const InputStyled = styled.input(({ theme }) => {
  return {
    height: '50px',
    padding: '0px 16px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: theme.colors.text.description,
    borderRadius: theme.values.rounded,
    "::placeholder": {
      color: theme.colors.text.description
    },
    ":focus-visible": {
      outlineColor: theme.colors.primary.normal
    }
  }
})