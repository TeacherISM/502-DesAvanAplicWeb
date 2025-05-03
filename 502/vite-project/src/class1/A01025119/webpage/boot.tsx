import React from 'react';
import { createRoot } from 'react-dom/client';
import { A01025119 } from './main_page';

const rootElement = document.querySelector('#A01025119');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <A01025119 />
    </React.StrictMode>
  );
}
