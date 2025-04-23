import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import Class3 from './Class3'
import Counter from './Counter'
import TravelForm from './TravelForm'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Class3 />
    <Counter />
    <TravelForm />
  </StrictMode>,
)