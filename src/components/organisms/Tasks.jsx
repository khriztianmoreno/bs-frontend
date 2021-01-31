import { useEffect } from 'react'
import styled from '@emotion/styled'

import TaskForm from '../molecules/TaskForm'
import TodoList from '../molecules/TodoList'
import EmptyTasks from '../atoms/EmpyTask'

import { useAppState, useAppDispatch } from '../../context'
import { getTasksByUser } from '../../context/servcies'

const TaskContainer = styled.div`
  height: 75vh;
  overflow-y: auto;
`

const Tasks = () => {
  const dispatch = useAppDispatch()
  const { userSelected, tasks = [] } = useAppState()

  const toDo = tasks.filter(task => task.state === 'TO DO')
  const done = tasks.filter(task => task.state === 'DONE')

  useEffect(() => {
    if (userSelected && userSelected._id) {
      getTasksByUser(dispatch, userSelected._id)
    }
  }, [userSelected])

  if (userSelected._id && !tasks.length) {
    return (
      <>
        <EmptyTasks
          text={`${userSelected.name} has no tasks created yet 🤦🏼‍♂️`}
        />
        <TaskForm />
      </>
    )
  }

  return (
    <>
      {!userSelected._id && (
        <EmptyTasks text={"Choose an user to view it's tasks 💁🏻‍♀️"} />
      )}

      <div>
        {tasks.length && userSelected._id ? (
          <TaskContainer>
            <TodoList toDo={toDo} done={done} />
          </TaskContainer>
        ) : null}
        <TaskForm />
      </div>
    </>
  )
}

export default Tasks
