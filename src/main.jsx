import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import CartaMelissaBTS from './CartaMelissaBTS.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartaMelissaBTS />
  </StrictMode>,
)
