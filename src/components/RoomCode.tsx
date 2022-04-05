import styled from 'styled-components'
import { MdContentCopy } from 'react-icons/md'

interface RoomCodeProps {
  code: string
}

export function RoomCode({ code }: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code)
  }

  return (
    <Button onClick={copyRoomCodeToClipboard}>
      <CopyContainer>
        <MdContentCopy color="white" />
      </CopyContainer>
      <Code>Sala #{ code }</Code>
    </Button>
  )
}

const Button = styled.button(({ theme }) => {
  return {
    height: '40px',
    borderRadius: '8px',
    overflow: 'hidden',
    background: 'white',
    border: '1px solid #835afd',
    cursor: 'pointer',
    display: 'flex'
  }
})

const CopyContainer = styled.div(({ theme }) => {
  return {
    backgroundColor: '#835afd',
    padding: '0px 12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
})

const Code = styled.span(({ theme }) => {
  return {
    display: 'block',
    alignSelf: 'center',
    flex: '1',
    padding: '0px 16px 0px 12px',
    width: '160px',
    fontSize: '14px',
    fontWeight: '500'
  }
})
