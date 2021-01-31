import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { useAppDispatch } from '../../context'
import { deleteUser, getUsers } from '../../context/servcies'

const Container = styled('div')(
  {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 10px',
    width: '100%',
  },
  ({ selected }) => css`
    border-bottom: solid 4px ${selected ? '#e4825f' : '#dedede'};
    background: white;
    text-transform: capitalize;

    &:hover {
      border-bottom: solid 4px rgb(35, 42, 66);
    }
  `
)

const DetailButton = styled.div`
  cursor: pointer;
  margin-right: 10px;
  height: 100%;
  width: 100%;
`

const DeleteButton = styled.div`
  cursor: pointer;
  font-size: 20px;
  margin-right: 10px;

  &:hover {
    color: red;
  }
`

const User = props => {
  const { user, isSelected } = props
  const dispatch = useAppDispatch()

  const selectUser = () => {
    dispatch({ type: 'USER_SELECTED', payload: { ...user } })
  }

  const removeUser = async () => {
    await deleteUser(dispatch, user._id)
    getUsers(dispatch)
  }

  return (
    <Container selected={isSelected}>
      <DetailButton onClick={selectUser}>{user.name}</DetailButton>
      <DeleteButton onClick={removeUser}>
        <i className="far fa-times-circle" />
      </DeleteButton>
    </Container>
  )
}

User.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  isSelected: PropTypes.bool,
}

User.defaultProps = {
  isSelected: false,
}

export default User
