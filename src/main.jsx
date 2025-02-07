import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}>
      
   </RouterProvider>
  </StrictMode>,
)
