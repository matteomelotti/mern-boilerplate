import React from 'react'
import { Link } from 'react-router-dom'
// import { Container, Image, Col, Row, Card } from 'react-bootstrap'
import '../../../css/authLayout/auth.css'

const AuthLayout = ({ children }) => {
  return (
    <div>
      <header>
        <div className='container-fluid'>
          <div className='row d-lg-flex justify-content-lg-center navbar-dark bg-dark'>
            <div className='col-md-12 col-lg-12 col-xl-8'>
              <nav className='navbar navbar-expand-md sticky-top d-xl-flex'>
                <div className='container-fluid'>
                  <Link className='navbar-brand' to='/'>
                    Mern
                    {/* <img className='logo' alt='' src='/images/...' /> */}
                  </Link>
                  <button data-toggle='collapse' className='navbar-toggler' data-target='#navcol-1'><span className='sr-only'>Toggle navigation</span><span className='navbar-toggler-icon' /></button>
                  <div className='collapse navbar-collapse d-md-flex d-lg-flex justify-content-md-start justify-content-lg-end' id='navcol-1'>
                    <ul className='navbar-nav d-md-flex flex-grow-1 justify-content-md-end flex-lg-grow-0 justify-content-xl-end'>
                      <li className='nav-item'><a className='nav-link active' href='/auth/login'>Accedi</a></li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div className='col-md-12'>
        <div className='card card-container'>
          <img
            src='//ssl.gstatic.com/accounts/ui/avatar_2x.png'
            alt='profile-img'
            className='profile-img-card'
          />
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
