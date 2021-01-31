import styled from '@emotion/styled'
import { css } from '@emotion/react'

import logo from '../../assets/img/logo.png'

const Container = styled('nav')(
  ({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.ebonyClay};
    display: flex;
    height: 10vh;
    justify-content: center;
    width: 100%;
  `
)

const Navbar = () => (
  <Container>
    <p>
      <img src={logo} alt="Bunny studio logo" />
    </p>
  </Container>
)

export default Navbar
