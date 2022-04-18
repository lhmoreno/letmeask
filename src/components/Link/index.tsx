import type { ReactNode } from 'react'

import * as Styled from './styles'

interface LinkProps {
  to: string
  children?: ReactNode
}

function Link({ children, to }: LinkProps) {
  return (
    <Styled.Link to={to}>
      { children }
    </Styled.Link>
  )
}

export default Link
