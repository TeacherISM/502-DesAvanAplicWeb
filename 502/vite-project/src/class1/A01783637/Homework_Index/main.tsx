//Imanol Santisteban
//A01783637
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../Homework_Index/App.tsx'
import "/src/App.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
