import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const Container = styled('div')(
  {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
    padding: '12px 0px',
    width: '100%',
  },
  () => css`
    border-bottom: solid 4px #e4825f;
    background: white;

    &:hover {
      background: white;
    }
  `
)

const DetailButton = styled.div`
  cursor: pointer;
  margin-right: 10px;
`

const DeleteButton = styled.div`
  cursor: pointer;
  margin-right: 10px;
`

const User = props => {
  const { user } = props
  return (
    <Container selected>
      <DetailButton>{user.name}</DetailButton>
      <DeleteButton>
        <i className="far fa-times-circle" />
      </DeleteButton>
    </Container>
  )
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default User
