const BASE = 'http://localhost:8080/api'

async function fetchData(endpoint) {
  try {
    const response = await fetch(endpoint)
    const data = await response.json()

    return data
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function getUsers(dispatch) {
  dispatch({ type: 'SET_LOADING', payload: true })
  try {
    const data = await fetchData(`${BASE}/users/`)
    dispatch({ type: 'SET_USERS', payload: data })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  } finally {
    dispatch({ type: 'SET_LOADING', payload: false })
  }
}

export async function getTasks(dispatch) {
  dispatch({ type: 'SET_LOADING', payload: true })
  try {
    const data = await fetchData(`${BASE}/tasks/`)
    dispatch({ type: 'SET_TASKS', payload: { ...data } })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  } finally {
    dispatch({ type: 'SET_LOADING', payload: false })
  }
}

export async function getTasksByUser(dispatch, userId) {
  dispatch({ type: 'SET_LOADING', payload: true })
  try {
    const data = await fetchData(`${BASE}/tasks/user/${userId}`)
    dispatch({ type: 'SET_TASKS', payload: data })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  } finally {
    dispatch({ type: 'SET_LOADING', payload: false })
  }
}

export async function createUser(dispatch, user) {
  dispatch({ type: 'SET_LOADING', payload: true })
  try {
    const payload = {
      body: JSON.stringify(user),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const data = await fetch(`${BASE}/users/`, payload)
    const newUser = await data.json()

    dispatch({ type: 'USER_SELECTED', payload: { ...newUser } })
    // dispatch({ type: 'SET_TASKS', payload: { ...newUser } })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  } finally {
    dispatch({ type: 'SET_LOADING', payload: false })
  }
}

export async function deleteUser(dispatch, userId) {
  dispatch({ type: 'SET_LOADING', payload: true })
  try {
    const payload = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }

    await fetch(`${BASE}/users/${userId}`, payload)

    dispatch({ type: 'USER_SELECTED', payload: { _id: undefined } })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  } finally {
    dispatch({ type: 'SET_LOADING', payload: false })
  }
}
