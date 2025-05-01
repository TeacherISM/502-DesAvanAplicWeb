import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UserProvider } from "./UserContext";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </StrictMode>,
)
