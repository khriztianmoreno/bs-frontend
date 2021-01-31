import PropTypes from 'prop-types'
import styled from '@emotion/styled'

export const SubmitButton = styled.button`
  background-color: rgb(230, 125, 33);
  border: none;
  color: #ffffff;
  cursor: pointer;
  display: block;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 40px;
  width: 100%;

  &:hover {
    background-color: rgb(114 116 121);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #c7c6c6;
    color: #ffffff;
  }
`

const Button = props => {
  const {
    children,
    type = 'submit',
    onClick,
    disabled,
  } = props

  return (
    <SubmitButton type={type} onClick={onClick} disabled={disabled}>
      {children}
    </SubmitButton>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
}

Button.defaultProps = {
  disabled: false,
  onClick: () => {},
}

export default Button
