import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import Class3 from './Class3.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Class3 />
  </StrictMode>,
)
