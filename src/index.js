import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.compat.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import Homepage from './pages/Homepage'
import SplashScreen from './pages/SplashScreen'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path='gamer-den' element={<SplashScreen/>}/>
      <Route exact path='gamer-den/*' element={<SplashScreen/>}/>
      <Route exact path='gamer-den/home' element={<Homepage/>}/>
    </Routes>
  </BrowserRouter>
)