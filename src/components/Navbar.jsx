import React from 'react'
import logo from '../assets/logo.png'
import offer from '../assets/offer.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="img"/>
      <ul className="navs">
        <li><img src={offer} alt="" /></li>
        <li>Offers</li>
        <li>Destinations</li>
        <li>Events</li>
        <li>ships</li>
        <li>Contact</li>
      </ul>

      <button className='bt' >Find a Cruis</button>
      <button>Web Check-in</button>
    </div>
  )
}

export default Navbar
