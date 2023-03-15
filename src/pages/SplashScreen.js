import React from 'react';
import LogoImg from '../logo.svg'
import '../animate/splashscreen.css'
import Typed from 'typed.js'

setTimeout(()=>{
  window.location.href = '/gamer-den/home'
},2000)

const SplashScreen = () => {
  const el = React.useRef(null)

  React.useEffect(()=>{
    const typed = new Typed (el.current, {
      strings: ['Power Up Your Game !'],
      typeSpeed: 50,
    })
    return ()=> {
      typed.destroy()
    }
  },[])

    return (
      <div className="container-fluid bg-black">
        <div className="row">
          <div className='col'>
            <div className="d-flex justify-content-center align-items-center vh-100">
              <img src={LogoImg} alt='logo' className='img-fluid animated fadeIn slower image-logo'/>
            </div>
          </div>
        </div>
        <div className='row position-fixed bottom-0 start-0 p-4'>
          <div className='col'>
            <span className='text-light text-uppercase fs-1 fw-bolder' ref={el}></span>
          </div>
        </div>
      </div>
    )
}

export default SplashScreen