import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import Task from './Task'

const Title = styled.h2`
  margin: 10px 0;
  text-transform: uppercase;
`
const List = styled.div`
  margin: 0 40px;
  padding-bottom: 50px;
`

const TodoList = props => {
  const { toDo, done } = props
  return (
    <div className="todolist-container">
      <List>
        <Title>To do list</Title>
        {toDo.map(task => (
          <Task key={task._id} task={task} />
        ))}
      </List>
      <List>
        <Title>Done list</Title>
        {done.map(task => (
          <Task key={task._id} task={task} />
        ))}
      </List>
    </div>
  )
}

const stateShape = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
})

TodoList.propTypes = {
  toDo: PropTypes.arrayOf(stateShape),
  done: PropTypes.arrayOf(stateShape),
}

TodoList.defaultProps = {
  toDo: [],
  done: [],
}

export default TodoList
