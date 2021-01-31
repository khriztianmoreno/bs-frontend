import React, { useState } from 'react'
import styled from '@emotion/styled'

import InputText from '../atoms/InputText'
import Button from '../atoms/Button'

const Container = styled.div`
  padding-top: 10px;
`

const UserForm = () => {
  const [user, saveUser] = useState({
    name: '',
  })

  const { name } = user

  const onChangeUser = e => {
    saveUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    if (name === '') {
      alert('The name is required')
    }

    saveUser({
      name: '',
    })
  }
  return (
    <Container>
      <Button type="button">New User</Button>
      <form onSubmit={onSubmit}>
        <InputText name={name} handleChange={onChangeUser} />
        <Button type="submit">Add user</Button>
      </form>
    </Container>
  )
}

export default UserForm
