import accountImg from '../../assets/images/account.png'
import likeSvg from '../../assets/icons/like.svg'
import * as Styled from './styles'

interface QuestionProps {
  content: string
  author: {
    name: string
    avatar: string
  }
}

function Question({ content, author }: QuestionProps) {
  return (
    <Styled.Container>
      <Styled.UserInfo>
        <Styled.UserImage src={accountImg} />
        <Styled.UserName>{ author.name }</Styled.UserName>
      </Styled.UserInfo>

      <p>{ content }</p>
      
      <Styled.ButtonIcon>
        <p>2</p>
        <Styled.LikeIcon src={likeSvg} />
      </Styled.ButtonIcon>
    </Styled.Container>
  )
}

export default Question
