import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import Class4 from './Class4.tsx'
import Counter from './Counter.tsx'
import TravelForm from './TravelForm.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Class4 />
    <Counter />
    <TravelForm />
  </StrictMode>,
)