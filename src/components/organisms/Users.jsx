import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import isEqual from 'lodash/isEqual'

import User from '../molecules/User'
import UserForm from '../molecules/UserForm'

import { useAppState, useAppDispatch } from '../../context'
import { getUsers } from '../../context/servcies'

const Container = styled.div`
  background: #f1f1f1;
  height: 50vh;
  overflow-y: auto;
`

const Users = () => {
  const dispatch = useAppDispatch()
  const { userSelected, users = [] } = useAppState()

  useEffect(() => {
    if (!isEqual(users)) {
      getUsers(dispatch)
    }
  }, [])

  return (
    <>
      <Container>
        <div className="users-content">
          {users.map(user => {
            const isSelected = (userSelected && userSelected._id) === user._id
            return <User key={user._id} user={user} isSelected={isSelected} />
          })}
        </div>
      </Container>
      <UserForm />
    </>
  )
}

export default React.memo(Users)
