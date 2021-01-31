import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Container = styled.div`
  align-items: center;
  display: flex;
  min-height: calc(100vh - 25vh);
  justify-content: center;
  width: 100%;
`
const BunnyContainer = styled.div`
  display: flex;
  align-items: center;
`
const Image = styled.img`
  width: 100px;
`
const Message = styled.div`
  font-size: 25px;
  font-weight: bold;
`

const EmptyTasks = ({ text }) => (
  <Container>
    <BunnyContainer>
      <div>
        <Image
          src="https://bunnystudio.com/static/images/bunny-studio-icon.png"
          alt="Bunnt Studio"
        />
      </div>
      <Message>
        {text}
      </Message>
    </BunnyContainer>
  </Container>
)

EmptyTasks.propTypes = {
  text: PropTypes.string.isRequired,
}

export default EmptyTasks
