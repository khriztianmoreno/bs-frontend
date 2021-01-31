import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Input = styled.input`
  background-color: white;
  border: solid 2px black;
  display: block;
  line-height: 30px;
  margin: 0 auto;
  padding: 0px 10px;
  width: 100%;
`

const InputText = props => {
  const { name, handleChange } = props
  return (
    <Input
      type="text"
      placeholder="User name"
      name="name"
      value={name}
      onChange={handleChange}
      className="input"
      required
    />
  )
}

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default InputText
