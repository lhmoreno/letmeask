import styled from 'styled-components'

const StyledContainer = styled.div(({ theme }) => {
  return {
    width: '100%',
    maxWidth: theme.breakpoints.large,
    margin: '0px auto',
    padding: '0px 64px',
    [`@media (max-width: ${theme.breakpoints.medium})`]: {
      padding: '0px 32px'
    },
    [`@media (max-width: ${theme.breakpoints.small})`]: {
      padding: '0px 16px'
    }
  }
})

export default StyledContainer
