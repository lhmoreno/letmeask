import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import logoSvg from '../../assets/images/logo.svg'
import backSvg from '../../assets/icons/back.svg'
import * as Styled from './styles'

interface PublicContainerProps {
  title: string
  children?: ReactNode
}

function PublicContainer({ title, children }: PublicContainerProps) {
  return (
    <Styled.Container>
      <Styled.Header>
        <Link to="/">
          <Styled.BackIcon src={backSvg} />
        </Link>
        <Link to="/">
          <Styled.Logo src={logoSvg} />  
        </Link>
      </Styled.Header>
      <Styled.Content>
        <Styled.Title>{ title }</Styled.Title>
        { children }
      </Styled.Content>
    </Styled.Container>
  )
}

export default PublicContainer
