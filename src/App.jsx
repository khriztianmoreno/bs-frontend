import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'

import Navbar from './components/atoms/Navbar'
import Users from './components/organisms/Users'
import Tasks from './components/organisms/Tasks'

const globalStyles = css`
  * {
    margin: 0px;
    padding: 0px;
    color: inherit;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
`
const ContainerTodo = styled.section`
  display: flex;
`
const Leftodo = styled.section`
  border-right: solid 1px #dbdbdb;
  height: 90vh;
  width: 25%;
`
const RightTodo = styled.section`
  width: 75%;
`

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Navbar />
      <ContainerTodo>
        <Leftodo>
          <Users />
        </Leftodo>
        <RightTodo>
          <Tasks />
        </RightTodo>
      </ContainerTodo>
    </>
  )
}

export default App
