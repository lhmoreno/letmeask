import likeSvg from '../../assets/icons/like.svg'
import * as Styled from './styles'

interface QuestionProps {
  id: string
  content: string
  author: {
    name: string
    avatar: string
  }
  likesLenght: number
  likeId?: string
  handleLikeQuestion?: (questionId: string, likeId: string | undefined) => void
}

function Question({ id, content, author, likesLenght, likeId, handleLikeQuestion }: QuestionProps) {

  return (
    <Styled.Container>
      <Styled.UserInfo>
        <Styled.UserImage src={author.avatar} />
        <Styled.UserName>{ author.name }</Styled.UserName>
      </Styled.UserInfo>

      <p>{ content }</p>
      
      <Styled.ButtonIcon
        type="button"
        onClick={() => handleLikeQuestion && handleLikeQuestion(id, likeId)}
        liked={likeId ? true : false}
      >
        <p>{ likesLenght }</p>
        <Styled.LikeIcon src={likeSvg} />
      </Styled.ButtonIcon>
    </Styled.Container>
  )
}

export default Question
