
import upi from '../assets/upi.png/'
import card from '../assets/card.png/'
import netbank from '../assets/netbank.png/'
import React from 'react'
import Card from './Card'
import NetBanking from './NetBanking'
import './Leftsec.css'
import { Link } from 'react-router-dom'


const Leftsec = () => {


  return (
    <div>
      <Link to="/">
        <div className='upi_opt'>
            <input type="radio"/>
            <div className="icon">
              <img src={upi} alt="img" />
            </div>
            <div>
            <h4>UPI Option</h4>
            <p>Pay Directly From Your Bank Acount</p>
            </div>
        </div>
        </Link>

       <Link to="/Card"> 
        <div className='upi_opt'>
            <input type="radio"/>
            <div className="icon">
              <img src={card} alt="img" />
            </div>
            <div>
            <h4>Debit/Credit Card</h4>
            <p>Visa, MasterCard, AMEX, Rupay and Dinnerclub</p>
            </div>
        </div></Link>

        <Link to="/NetBanking">  
        <div className='upi_opt'>
            <input type="radio"/>
            <div className="icon">
              <img src={netbank} alt="img" />
            </div>
            <div>
            <h4>NetBanking</h4>
            <p>All major Bank Available</p>
            </div>
        </div></Link>

    </div>
  )
}

export default Leftsec
