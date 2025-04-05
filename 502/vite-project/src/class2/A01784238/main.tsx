import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../class1/A01784238/index.css'
import Login from './LoginForm'
import TravelForm from './TravelForm'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <h2>Part 1 Login Form Example</h2>
        <Login />
        <h2>Part 2 Travel Form Example</h2>
        <TravelForm />
    </StrictMode>,
)
