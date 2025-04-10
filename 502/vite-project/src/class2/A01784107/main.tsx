import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Class2 from './Class2.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Class2 onSubmit={(value: string) => console.log(value)} />
  </StrictMode>
);
