// import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import TaskForm from '../molecules/TaskForm'
import TodoList from '../molecules/TodoList'
// import EmptyTasks from '../atoms/EmpyTask'

const TaskContainer = styled.div`
  height: 75vh;
  overflow-y: auto;
`

const dummyToDo = [
  {
    state: 'TO DO',
    _id: '601596a50cfcb8b3b060033f',
    userId: '60157d8bfe4bd8a80caaa0a1',
    description: 'create express backend',
    createdAt: '2021-01-30T17:25:57.973Z',
    updatedAt: '2021-01-30T17:40:54.462Z',
    __v: 0,
  },
  {
    state: 'TO DO',
    _id: '601596a50cfcb8b3b060033g',
    userId: '60157d8bfe4bd8a80caaa0a1',
    description: 'create ',
    createdAt: '2021-01-30T17:25:57.973Z',
    updatedAt: '2021-01-30T17:40:54.462Z',
    __v: 0,
  },
  {
    state: 'TO DO',
    _id: '601596a50cfcb8b3b060033h',
    userId: '60157d8bfe4bd8a80caaa0a1',
    description: 'create express ',
    createdAt: '2021-01-30T17:25:57.973Z',
    updatedAt: '2021-01-30T17:40:54.462Z',
    __v: 0,
  },
]
const dummyDone = [
  {
    state: 'DONE',
    _id: '6015b3b00dbaa27d31a90e91',
    userId: '60157d8bfe4bd8a80caaa0a1',
    description: 'create react frontend',
    createdAt: '2021-01-30T17:25:57.973Z',
    updatedAt: '2021-01-30T17:40:54.462Z',
    __v: 0,
  },
]

const Tasks = () => (
  <>
    {/* <EmptyTasks text={"Choose an user to view it's tasks"} /> */}
    <div>
      <TaskContainer>
        <TodoList toDo={dummyToDo} done={dummyDone} />
      </TaskContainer>
      <TaskForm />
    </div>
  </>
)

export default Tasks
