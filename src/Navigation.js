import React from 'react'
import Logo from './logo.svg'
import { Link } from 'react-router-dom'

let LogoStyle = {
  width: '80px',
  height: '80px'
}

const Navigation = () => {
  return (
    <nav className='navbar navbar-dark navbar-expand-md bg-dark p-4 m-0'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/gamer-den'>
          <img src={Logo} alt='logo' style={LogoStyle}/>
        </Link>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarResponsive'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav ms-auto'>
            {/* <li className='nav-item'>
              <Link className='nav-link' To='/gamer-den'>Home</Link>
            </li> */}
            <li className='nav-item'>
              <Link className='nav-link' to='/gamer-den/products'>Products</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/gamer-den/on-sale'>On Sale</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/gamer-den/contact-support'>Contact Us</Link>
            </li>
          </ul>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/gamer-den/login'>Login</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/gamer-den/shop-cart'>
              <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 197.7 166" fill='#fff'>
                <path d="M197.9 55.9L169.9 127.4 64.5 127.4 27.6 29.8 0 29.8 0.2 16.7 36.5 16.7 73.4 114.3 160.9 114.3 183 55.9"></path>
                <circle cx="143.8" cy="153" r="13"></circle>
                <circle cx="90.8" cy="153" r="13"></circle>
                </svg>
              </Link>
            </li>
          </ul>
      </div>
      </div>
    </nav>
  )
}

export default Navigation