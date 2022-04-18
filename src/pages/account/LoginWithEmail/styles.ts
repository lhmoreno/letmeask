import styled from 'styled-components'

export const Box = styled.div(({ theme }) => {
  return {
    display: 'grid',
    gap: '16px'
  }
})

export const Options = styled.div(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 8px',
    fontSize: '14px',
    color: theme.colors.text.description
  }
})

export const CheckboxContainer = styled.label(({ theme }) => {
  return {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  }
})

export const InputHide = styled.input(({ theme }) => {
  return {
    display: 'none'
  }
})

export const Text = styled.p(({ theme }) => {
  return {
    cursor: 'default',
    display: 'flex',
    justifyContent: 'center',
    gap: '2px',
    fontSize: '14px',
    color: theme.colors.text.description
  }
})