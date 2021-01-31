const BASE = process.env.REACT_APP_API_SERVICE_URL

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
    dispatch({ type: 'ERROR', payload: error })
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
    dispatch({ type: 'ERROR', payload: error })
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
    dispatch({ type: 'ERROR', payload: error })
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
    dispatch({ type: 'ERROR', payload: error })
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
    dispatch({ type: 'ERROR', payload: error })
  } finally {
    dispatch({ type: 'SET_LOADING', payload: false })
  }
}

export async function createTask(dispatch, task) {
  dispatch({ type: 'SET_LOADING', payload: true })
  try {
    const payload = {
      body: JSON.stringify(task),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const data = await fetch(`${BASE}/tasks/`, payload)
    const newTask = await data.json()

    dispatch({ type: 'TASK_SELECTED', payload: { ...newTask } })
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error })
  } finally {
    dispatch({ type: 'SET_LOADING', payload: false })
  }
}

export async function updateTask(dispatch, task) {
  dispatch({ type: 'SET_LOADING', payload: true })
  try {
    const payload = {
      body: JSON.stringify(task),
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const data = await fetch(`${BASE}/tasks/${task._id}`, payload)
    const updatedTask = await data.json()

    dispatch({ type: 'TASK_SELECTED', payload: { ...updatedTask } })
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error })
  } finally {
    dispatch({ type: 'SET_LOADING', payload: false })
  }
}

export async function deleteTask(dispatch, taskId) {
  dispatch({ type: 'SET_LOADING', payload: true })
  try {
    const payload = {
      method: 'DELETE',
    }

    const data = await fetch(`${BASE}/tasks/${taskId}`, payload)
    const updatedTask = await data.json()

    dispatch({ type: 'TASK_SELECTED', payload: { ...updatedTask } })
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error })
  } finally {
    dispatch({ type: 'SET_LOADING', payload: false })
  }
}
