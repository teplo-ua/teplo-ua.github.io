import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { site } from './assets/paths/index.js';

let favicon = document.querySelector("link[rel='icon']");
if (!favicon) {
  favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/png';
  document.head.appendChild(favicon);
}
favicon.href = site.logo;

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
