import React from 'react'
import CyberImage from '../images/Cyber copy.webp'
import Navigation from '../Navigation'

const Homepage = () => {
  return (
    <>
    <Navigation/>
      <div className='container'>
        <div className='row py-5'>
          <div className='col-md-6'>
            <div className='card shadow' style={{minHeight:'400px',borderRadius:'20px',background:'rgb(136,88,237)'}}>
              <div className='card-body p-4'>
                <p className='fs-4 text-uppercase'>Power up your game</p>
                <h1 className='fw-bold text-uppercase fw-bolder py-2' style={{fontSize:'3rem'}}>PC building master-race</h1>
                <p className='fs-5 text-uppercase'>pc & console</p>
              </div>
            </div>
          </div>
          <div className='col-md-6 p-3'>
            <div className='card shadow' style={{minHeight:'400px',borderRadius:'20px',background:'transparent'}}>
              <div className='card-body p-1'>
                <img src={CyberImage} alt='Loo' className='img-fluid' style={{borderRadius:'20px'}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage