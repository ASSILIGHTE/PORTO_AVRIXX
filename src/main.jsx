import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const navigationEntry = performance.getEntriesByType('navigation')[0]
const isPageRefresh = navigationEntry?.type === 'reload'

if (isPageRefresh) {
  window.location.replace('/')
} else {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
