import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import SimpleCounter from './SimpleCounter'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <SimpleCounter />
    </StrictMode>,
)
