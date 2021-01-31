import React, { useState } from 'react'

import InputText from '../atoms/InputText'
import Button from '../atoms/Button'

import { useAppDispatch } from '../../context'
import { createUser, getUsers } from '../../context/servcies'

const UserForm = () => {
  const dispatch = useAppDispatch()
  // const { userSelected, tasks = [] } = useAppState()
  const [showForm, setShowForm] = useState(false)
  const [user, saveUser] = useState({
    name: '',
  })

  const { name } = user

  const onChangeUser = e => {
    saveUser({
      name: e.target.value,
    })
  }

  const onSubmit = async e => {
    e.preventDefault()
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
          <InputText name={name} handleChange={onChangeUser} />
          <Button type="submit">Add user</Button>
        </form>
      )}
    </div>
  )
}

export default UserForm
