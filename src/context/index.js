import React from 'react'
import PropTypes from 'prop-types'

const AppStateContext = React.createContext()
const AppDispatchContext = React.createContext()

const initialState = {
  users: [],
  tasks: [],
  userSelected: { _id: undefined },
  taskSelected: { _id: undefined },
  isLoading: true,
  error: null,
}

function appReducer(state, action) {
  switch (action.type) {
    case 'USER_SELECTED': {
      return {
        ...state,
        userSelected: action.payload,
      }
    }
    case 'TASK_SELECTED': {
      return {
        ...state,
        taskSelected: action.payload,
      }
    }
    case 'SET_USERS': {
      return {
        ...state,
        users: action.payload,
      }
    }
    case 'SET_TASKS': {
      return {
        ...state,
        tasks: action.payload,
      }
    }
    case 'SET_LOADING': {
      return {
        ...state,
        isLoading: action.payload,
      }
    }
    case 'ERROR': {
      return {
        ...state,
        error: action.payload,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function AppProvider({ children }) {
  const [state, dispatch] = React.useReducer(appReducer, initialState)
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

function useAppState() {
  const context = React.useContext(AppStateContext)
  if (context === undefined) {
    throw new Error('useAppState must be used within a AppProvider')
  }
  return context
}

function useAppDispatch() {
  const context = React.useContext(AppDispatchContext)
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within a AppProvider')
  }
  return context
}

export { AppProvider, useAppState, useAppDispatch }
