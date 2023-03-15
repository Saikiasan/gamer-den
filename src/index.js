import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.compat.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import Homepage from './pages/Homepage'
import SplashScreen from './pages/SplashScreen'

// ROUTER PATHS SETTING HERE BELOW
const router = createBrowserRouter([
  {
    path: '/gamer-den',
    element: <SplashScreen/>
  },
  {
    path: '/gamer-den/*',
    element: <SplashScreen/>
  },
  {
    path: '/gamer-den/home',
    element: <Homepage/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)