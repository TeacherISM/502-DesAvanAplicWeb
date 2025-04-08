import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Tarea3.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)