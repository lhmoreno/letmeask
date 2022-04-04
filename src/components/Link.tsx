import type { ReactNode } from 'react'

import { Link as LinkRouter } from 'react-router-dom'
import styled from 'styled-components'

interface LinkProps {
  to: string
  children?: ReactNode
}

export function Link({ children, to }: LinkProps) {
  return (
    <LinkStyled to={to}>
      { children }
    </LinkStyled>
  )
}

const LinkStyled = styled(LinkRouter)(({ theme }) => {
  return {
    textDecoration: 'underline',
    color: theme.colors.link
  }
})
