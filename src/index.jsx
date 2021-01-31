import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@emotion/react'

import App from './App'
import { AppProvider } from './context'
import theme from './theme'

import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
