import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from './config.ts';

// Inject CSS variables for colors from config
document.documentElement.style.setProperty('--color-luxury-gold', PRIMARY_COLOR);
document.documentElement.style.setProperty('--color-brand-blue-deep', SECONDARY_COLOR);
document.documentElement.style.setProperty('--color-brand-blue-soft', TERTIARY_COLOR);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
