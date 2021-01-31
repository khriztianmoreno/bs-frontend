import React, { useState } from 'react'

import InputText from '../atoms/InputText'
import Button from '../atoms/Button'

import { useAppDispatch } from '../../context'
import { createUser, getUsers } from '../../context/servcies'

const UserForm = () => {
  const dispatch = useAppDispatch()
  const [showForm, setShowForm] = useState(false)
  const [user, saveUser] = useState({
    name: '',
  })

  const { name } = user

  const onChangeUser = evt => {
    saveUser({
      name: evt.target.value,
    })
  }

  const onSubmit = async evt => {
    evt.preventDefault()
    await createUser(dispatch, user)
    setShowForm(false)
    saveUser({ name: '' })
    getUsers(dispatch)
  }

  return (
    <div>
      {!showForm && (
        <Button
          type="button"
          onClick={() => {
            setShowForm(true)
          }}
        >
          New User
        </Button>
      )}
      {showForm && (
        <form onSubmit={onSubmit}>
          <InputText
            name={name}
            handleChange={onChangeUser}
            value={user.name}
          />
          <Button type="submit">Add user</Button>
        </form>
      )}
    </div>
  )
}

export default UserForm
