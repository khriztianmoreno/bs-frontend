import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const Input = styled('input')(
  ({ theme }) => css`
    background-color: ${theme.colors.white};
    border: solid 2px ${theme.colors.black};
    display: block;
    line-height: 30px;
    margin: 0 auto;
    padding: 0px 10px;
    width: 100%;

    &:disabled {
      cursor: not-allowed;
      background-color: ${theme.colors.silver};
      color: ${theme.colors.white};
    }
  `
)

const InputText = props => {
  const {
    handleChange,
    disabled,
    name,
    placeholder,
    value,
  } = props

  return (
    <Input
      name={name}
      onChange={handleChange}
      placeholder={placeholder}
      type="text"
      value={value}
      disabled={disabled}
      required
    />
  )
}

InputText.propTypes = {
  disabled: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
}

InputText.defaultProps = {
  disabled: false,
  placeholder: 'User name',
  value: '',
}

export default InputText
