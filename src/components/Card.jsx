import React from 'react'
import rupay from '../assets/rupay.png'
import info from '../assets/info.png'
import safe from '../assets/safe.png'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <div>
      <h4>Enter your Card Detail</h4>
      <img className='card_logos' src={rupay} alt="" />

      <div className="info">
        <div>
            <img src={info} alt="" />
        </div>
        <p>Please ensure your card is enable for online transaction. <Link to="/">Know more</Link></p>
      </div>

      <input type="text" className='long' placeholder='Card Number' />
      <input type="text" className='short' placeholder='Expiry Date' />
      <input type="text" className='short' placeholder='CVV' />
      <input type="text" className='long' placeholder='Card Holder Name' />


      <div className="footer">
      <div className='safe'>
        <div>
          <img src={safe} alt="" />
        </div>

        <p>Safe & Secure Payment</p>
      </div>

      <div className="pay-btn">
        <button>Proceed to Payment</button>
      </div>
      </div>
    </div>
  )
}

export default Card
