import styled, { CSSObject } from "styled-components"

interface StyledButtonProps {
  variant: 'primary' | 'danger' | 'simple'
}

export const Container = styled.button<StyledButtonProps>(({ theme, variant }) => {
  const style: CSSObject = {
    height: '50px',
    padding: '0px 32px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    fontWeight: '500',
    color: 'white',
    borderRadius: '8px',
    transitionProperty: 'background',
    transitionDuration: '0.3s'
  }

  switch (variant) {
    case 'primary':
      return {
        ...style,
        backgroundColor: theme.colors.primary.normal,
        ":hover": {
          backgroundColor: theme.colors.primary.hover
        }
      }

    case 'simple':
      return {
        ...style,
        backgroundColor: theme.colors.gray.normal,
        color: theme.colors.text.description,
        ":hover": {
          backgroundColor: theme.colors.gray.hover
        }
      }

    case 'danger':
      return {
        ...style,
        backgroundColor: theme.colors.danger.normal,
        ":hover": {
          backgroundColor: theme.colors.danger.hover
        }
      }

    default:
      return {
        ...style,
        backgroundColor: theme.colors.primary.normal,
        ":hover": {
          backgroundColor: theme.colors.primary.hover
        }
      }
  }
})