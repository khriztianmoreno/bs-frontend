import { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import Button from '../atoms/Button'
import Input from '../atoms/InputText'

import { useAppState, useAppDispatch } from '../../context'
import { createTask, getTasksByUser } from '../../context/servcies'

const Container = styled('div')(
  ({ theme }) => css`
    background-color: ${theme.colors.ebonyClay};
    display: flex;
    flex-direction: column;
    height: 15vh;
    justify-content: center;
    padding: 0 80px;
  `
)
const Form = styled.form`
  align-items: center;
  display: flex;
`
const Message = styled('h3')(
  ({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: bold;
    padding-bottom: 10px;
  `
)
const UserName = styled.span`
  text-transform: capitalize;
`
const ButtonContainer = styled.div`
  margin-left: 50px;
  width: 200px;
`

const TaskForm = () => {
  const dispatch = useAppDispatch()
  const { userSelected } = useAppState()
  const [newTask, setNewTask] = useState({
    description: '',
  })

  const onChangeTask = evt => {
    setNewTask({
      description: evt.target.value,
    })
  }

  const onSubmit = async evt => {
    evt.preventDefault()
    const task = {
      ...newTask,
      userId: userSelected._id,
    }

    await createTask(dispatch, task)
    setNewTask({ description: '' })
    await getTasksByUser(dispatch, userSelected._id)
  }

  return (
    <Container>
      {!userSelected.name ? (
        <Message>User not found</Message>
      ) : (
        <Message>
          Add a task to
          {' '}
          <UserName>
            {userSelected.name}
          </UserName>
        </Message>
      )}

      <Form onSubmit={onSubmit}>
        <Input
          disabled={!userSelected.name}
          handleChange={onChangeTask}
          name="description"
          placeholder="Task name"
          type="text"
          value={newTask.description}
        />
        <ButtonContainer>
          <Button type="submit" disabled={!userSelected.name}>Add task</Button>
        </ButtonContainer>
      </Form>
    </Container>
  )
}

export default TaskForm
