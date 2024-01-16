import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'

import App from './App'
import { store } from './store/store'
import { theme } from './theme/theme'

// eslint-disable-next-line no-console
console.log('=====================>>>> ', import.meta.env.VITE_REACT_APP_TEST)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <Provider store={store}>,
              <App />
          </Provider>
      </ThemeProvider>
  </React.StrictMode>,
)
