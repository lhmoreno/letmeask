import { MdAccountBox, MdBackHand, MdChat, MdLogout } from 'react-icons/md'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface DashboardProps {

}

export function Dashboard({  }: DashboardProps) {
  return (
    <Container>
      <LinkStyled to="#">
        <MdAccountBox />
        Conta
      </LinkStyled>

      <LinkStyled to="#">
        <MdChat />
        Salas
      </LinkStyled>

      <LinkStyled to="#">
        <MdBackHand />
        Perguntas
      </LinkStyled>

      <LinkStyled to="#">
        <MdLogout />
        Sair
      </LinkStyled>
    </Container>
  )
}

const Container = styled.div(({ theme }) => {
  return {
    position: 'absolute',
    top: '48px',
    left: '-72px',
    margin: 'auto',
    width: '192px',
    padding: '16px',
    border: '1px solid #DBDCDD',
    borderRadius: '8px',
    backgroundColor: '#FFFFFF',
    display: 'grid',
    gap: '16px'
  }
})

const LinkStyled = styled(Link)(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    // color: theme.colors.gray.dark,
    ":hover": {
      fontWeight: '500',
      // color: theme.colors.primary
    }
  }
})

const Icon = styled.div(({ theme }) => {
  return {
    
  }
})
