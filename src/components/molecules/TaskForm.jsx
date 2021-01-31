import styled from '@emotion/styled'

import Button from '../atoms/Button'
import Input from '../atoms/InputText'

const Form = styled.form`
  align-items: center;
  background: #232a42;
  display: flex;
  height: 15vh;
  justify-content: center;
  padding: 0 80px;
`
const ButtonContainer = styled.div`
  margin-left: 50px;
  width: 200px;
`

const TaskForm = () => {
  const onChangeTask = () => {}

  const onSubmit = e => {
    e.preventDefault()
  }
  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="Task name"
        name="description"
        value="description"
        onChange={onChangeTask}
      />
      <ButtonContainer>
        <Button type="submit">Add task</Button>
      </ButtonContainer>
    </Form>
  )
}

export default TaskForm
