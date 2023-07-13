import React from 'react'
import './uppernavbar.css'

export const UpperNavbar = () => {
  return (
    <nav className='d-flex flex-md-row justify-content-md-around flex-column text-center bg-success text-white'>
            <li><i className="bi bi-telephone"></i>+001234567890</li>
            <li>Get 50% Off on Selected Items    |      Shop Now</li>
            <div>
                <select name="" id="" className='bg-success text-white'>
                    <option value="" selected disabled hidden>Eng</option>
                    <option value="">Bangla</option>
                    <option value="">Arabic</option>
                    <option value="">Urdu</option>
                </select>
                <select name="" id="" className='bg-success text-white'>
                    <option value="" selected disabled hidden>Location</option>
                    <option value="">Dhaka</option>
                    <option value="">USA</option>
                    <option value="">India</option>
                </select>
            </div>
    </nav>
  )
}
