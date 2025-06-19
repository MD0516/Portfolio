import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'
import RedirectPage from './Pages/RedirectPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RedirectPage />
  </StrictMode>,
)
