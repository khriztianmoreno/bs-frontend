import PropTypes from 'prop-types'
import styled from '@emotion/styled'

export const SubmitButton = styled.button`
  background: rgb(230, 125, 33);
  border: none;
  color: white;
  cursor: pointer;
  display: block;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 40px;
  width: 100%;

  &:hover {
    background-color: rgb(35, 42, 66);
  }
`

const Button = props => {
  const { children, type = 'submit' } = props

  return <SubmitButton type={type}>{children}</SubmitButton>
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
}

export default Button
