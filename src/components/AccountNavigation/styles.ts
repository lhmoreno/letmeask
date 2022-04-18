import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Container = styled.div(({ theme }) => {
  return {
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: '2fr 3fr',
    "@media (max-width: 1280px)": {
      gridTemplateColumns: '1fr'
    }
  }
})

export const Aside = styled.aside(({ theme }) => {
  return {
    background: theme.colors.primary.normal,
    color: theme.colors.background.box,
    display: 'flex',
    gap: '16px',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '120px 80px',
    "@media (max-width: 1280px)": {
      display: 'none'
    }
  }
})

export const Illustration = styled.img(({ theme }) => {
  return {
    width: '320px'
  }
})

export const Title = styled.strong(({ theme }) => {
  return {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '36px'
  }
})

export const Subtitle = styled.p(({ theme }) => {
  return {
    fontSize: '24px'
  }
})

export const PageContainer = styled.div(({ theme }) => {
  return {
    width: '100%',
    padding: '48px',
    display: 'flex',
    flexDirection: 'column'
  }
})

export const Header = styled.header(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export const Link = styled(LinkRouter)(({ theme }) => {
  return {
    color: theme.colors.text.description,
    transitionProperty: 'color',
    transitionDuration: '0.2s',
    ":hover": {
      color: theme.colors.primary.normal
    }
  }
})

export const LogoImage = styled.img(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-between'
  }
})

export const Box = styled.div(({ theme }) => {
  return {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export const Heading = styled.h2(({ theme }) => {
  return {
    fontSize: '24px'
  }
})

export const Content = styled.div(({ theme }) => {
  return {
    width: '320px',
    display: 'grid',
    gap: '24px'
  }
})
