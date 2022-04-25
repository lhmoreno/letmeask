import styled from 'styled-components'

export const Container = styled.textarea(({ theme }) => {
  return {
    border: '0',
    padding: '16px',
    borderRadius: theme.rounded,
    background: theme.colors.white,
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
    resize: 'vertical',
    minHeight: '136px',
    ":focus-visible": {
      outlineColor: theme.colors.primary
    }
  }
})
