import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Button from '../atoms/Button'

const Container = styled.div`
  align-items: center;
  border-bottom: solid 1px #a0a0a0;
  display: flex;
  justify-content: space-between;
  padding: 15px 5px;
`
const TaskContainer = styled.div`
  display: flex;
  width: 100%;
`
const CompleteButton = styled.button`
  margin-right: 10px;
  font-size: 20px;
`
const Description = styled.p`
  font-weight: normal;
  font-size: 20px;
  text-transform: capitalize;
`
const MarkDoneContainer = styled.div`
  width: 200px;
`
const Task = ({ task }) => {
  const { description, state } = task

  return (
    <Container>
      <TaskContainer className="left-task">
        <CompleteButton className="close-container">
          <i className="far fa-times-circle" />
        </CompleteButton>
        <Description>{description}</Description>
      </TaskContainer>
      {state === 'TO DO' ? (
        <MarkDoneContainer>
          <Button type="submit">Mark as done</Button>
        </MarkDoneContainer>
      ) : null}
    </Container>
  )
}

Task.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }).isRequired,
}

export default Task
