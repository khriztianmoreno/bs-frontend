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
  ({ theme, selected }) => css`
    background-color: ${theme.colors.white};
    border-bottom: solid 4px ${selected ? theme.colors.mangoTango : theme.colors.alto};
    text-transform: capitalize;

    &:hover {
      border-bottom: solid 4px ${theme.colors.ebonyClay};
    }
  `
)
const DetailButton = styled.div`
  cursor: pointer;
  margin-right: 10px;
  height: 100%;
  width: 100%;
`
const DeleteButton = styled('div')(
  ({ theme }) => css`
    cursor: pointer;
    font-size: 20px;
    margin-right: 10px;

    &:hover {
      color: ${theme.colors.red};
    }
  `
)

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
      <DetailButton onClick={selectUser}>
        {user.name}
      </DetailButton>
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
