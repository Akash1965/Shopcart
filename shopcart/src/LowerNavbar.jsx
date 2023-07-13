import React from 'react'
import './lowernavbar.css'

export const LowerNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 px-5 fw-medium px-xl-4">
    <div className="container-fluid mx-5 mx-xl-4">
    <a className="navbar-brand ms-3 ms-xl-0" href="#">
      <img src="/public/images/shopcart-logo.svg" alt="Bootstrap" width="30" height="24"/>
    </a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-5 mb-2 mb-lg-0 mx-xl-2">
          <li className="nav-item dropdown px-1">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item px-1">
          <a className="nav-link active" aria-current="page" href="#">Deals</a>
        </li>
        <li className="nav-item px-1">
          <a className="nav-link" href="#">What&apos;s New</a>
        </li>
        <li className="nav-item px-1">
          <a className="nav-link" href="#">Delivery</a>
        </li>
      </ul>
      <form className="d-flex me-xl-2" role="search">
        <input className="form-control me-2 rounded-pill ps-4 d-none d-md-block" type="search" placeholder="Search" aria-label="Search" style={{width: '18rem'}}/>
      </form>
    </div>
      <li className="nav-item ms-1 me-5 me-xl-3">
      <i className="bi bi-person d-inline-block me-2" style={{width: '1rem'}}></i>
          <a className="nav-link" href="#" style={{display: 'inline-block'}}>Account</a>
        </li>
        <li className="nav-item me-5 me-xl-3">
        <i className="bi bi-cart d-inline-block me-2"></i>
          <a className="nav-link" href="#" style={{display: 'inline-block'}}>Cart</a>
        </li>
  </div>
</nav>
  )
}
