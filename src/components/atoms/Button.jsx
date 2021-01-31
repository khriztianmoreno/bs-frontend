import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const SubmitButton = styled('button')(
  ({ theme }) => css`
    background-color: ${theme.colors.mangoTango};
    border: none;
    color: ${theme.colors.white};
    cursor: pointer;
    display: block;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 1px;
    line-height: 40px;
    width: 100%;

    &:hover {
      background-color: ${theme.colors.paleSky};
    }

    &:disabled {
      cursor: not-allowed;
      background-color: ${theme.colors.silver};
      color: ${theme.colors.white};
    }
  `
)

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
