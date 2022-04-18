import styled from 'styled-components'

export const Box = styled.div(({ theme }) => {
  return {
    display: 'grid',
    gap: '16px'
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
