import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './global.styles.ts'
import App from './App.tsx'
import './language/i18n.ts'  

createRoot(document.getElementById('root')!).render(
  <>
   <GlobalStyles />
  <StrictMode>
    <App />
  </StrictMode>
  </>
)
