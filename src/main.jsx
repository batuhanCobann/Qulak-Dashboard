import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/bootsrap/bootstrap.min.css";
import "./assets/bootsrap/bootstrap.bundle.min.js";
import './index.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


