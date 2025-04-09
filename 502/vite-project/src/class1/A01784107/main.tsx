import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import Class1 from './Class1.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Class1 />
  </StrictMode>,
)