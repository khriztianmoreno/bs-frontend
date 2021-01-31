import styled from '@emotion/styled'

import logo from '../../assets/img/logo.png'

const Container = styled.nav`
  align-items: center;
  background-color: rgb(35, 42, 66);
  display: flex;
  height: 10vh;
  justify-content: center;
  width: 100%;
`

const Navbar = () => (
  <Container>
    <p>
      <img src={logo} alt="Bunny studio logo" />
    </p>
  </Container>
)

export default Navbar
