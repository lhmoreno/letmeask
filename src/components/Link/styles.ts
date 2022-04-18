import styled from "styled-components"
import { Link as LinkRouter } from 'react-router-dom'

export const Link = styled(LinkRouter)(({ theme }) => {
  return {
    color: theme.colors.text.link,
    textDecoration: 'none',
    ":hover": {
      textDecoration: 'underline'
    }
  }
})