import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Button from '../atoms/Button'

import { useAppState, useAppDispatch } from '../../context'
import { updateTask, getTasksByUser, deleteTask } from '../../context/servcies'

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
  const dispatch = useAppDispatch()
  const { userSelected } = useAppState()
  const { description, state } = task

  const markAsDoneTask = async () => {
    await updateTask(dispatch, { ...task, state: 'DONE' })
    await getTasksByUser(dispatch, userSelected._id)
  }

  const removeTask = async () => {
    await deleteTask(dispatch, task._id)
    await getTasksByUser(dispatch, userSelected._id)
  }

  return (
    <Container>
      <TaskContainer>
        <CompleteButton onClick={removeTask}>
          <i className="far fa-times-circle" />
        </CompleteButton>
        <Description>
          {description}
        </Description>
      </TaskContainer>
      {state === 'TO DO' ? (
        <MarkDoneContainer>
          <Button type="submit" onClick={markAsDoneTask}>Mark as done</Button>
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
