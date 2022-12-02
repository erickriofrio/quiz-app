import React    from 'react'
import ReactDOM from 'react-dom/client'
// Styles
import './index.css'
// Components
import App                from './App'
import AppContextProvider from './context/AppContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
)
