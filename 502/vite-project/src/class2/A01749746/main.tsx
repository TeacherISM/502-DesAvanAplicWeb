import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Tarea2.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)