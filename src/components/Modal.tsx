import styled from 'styled-components'
import { MdOutlineCancel, MdOutlineDelete } from 'react-icons/md'

import { Button } from './Button'

interface ModalProps {
  icon?: 'cancel' | 'delete'
  title: string
  description: string
  buttonTextConfirm: string
  onSubmit?: (confirm: boolean) => void
}

interface IconStyleProps {
  variant: 'cancel' | 'delete'
}

export function Modal({ icon = 'cancel', title, description, buttonTextConfirm, onSubmit }: ModalProps) {
  function Icon() {
    switch (icon) {
      case 'cancel':
        return <MdOutlineCancel color="#E73F5D" size={40} />

      case 'delete':
        return <MdOutlineDelete color="#E73F5D" size={40} />

      default:
        return <MdOutlineCancel color="#E73F5D" size={40} />
    }
  }

  return (
    <Container>
      <ModalContainer>
        <Icon />
        <Title>{ title }</Title>
        <Description>{ description }</Description>
        <Buttons>
          <Button 
            title="Cancelar"
            variant="simple"
            onClick={() => onSubmit && onSubmit(false)}
          />
          <Button 
            title={buttonTextConfirm}
            variant="danger"
            onClick={() => onSubmit && onSubmit(true)}
          />
        </Buttons>
      </ModalContainer>
    </Container>
  )
}

const Container = styled.div(({ theme }) => {
  return {
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    top: '0',
    left: '0',
    backgroundColor: '#050206CC',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const ModalContainer = styled.div(({ theme }) => {
  return {
    width: '600px',
    height: '360px',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Title = styled.p(({ theme }) => {
  return {
    marginTop: '24px',
    fontFamily: '"Poppins", sans-serif',
    fontSize: '24px',
    fontWeight: '700',
    color: theme.colors.text
  }
})

const Description = styled.p(({ theme }) => {
  return {
    marginTop: '12px',
    color: theme.colors.gray.dark
  }
})

const Buttons = styled.div(({ theme }) => {
  return {
    marginTop: '32px',
    display: 'flex',
    gap: '8px'
  }
})
