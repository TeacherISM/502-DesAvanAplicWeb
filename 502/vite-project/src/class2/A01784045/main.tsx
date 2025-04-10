import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import Class2 from './Class2.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Class2 />
  </StrictMode>,
)
