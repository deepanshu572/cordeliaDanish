import React from 'react'
import gpay from '../assets/gpay.png'
import bhim from '../assets/bhim.png'
import PhonePe from '../assets/PhonePe.png'
import Paytm from '../assets/Paytm.png'
import safe from '../assets/safe.png'
import './Midsec.css'

const Midsec = () => {
  return (
    <div>
      <h3>Pay Using UPI</h3>

      <div className="upi_logos">
        <div className="logo">
            <img src={gpay} alt="gpay" />
        </div>
        <div className="logo">
            <img src={bhim} alt="gpay" />
        </div>
        <div className="logo">
            <img src={PhonePe} alt="gpay" />
        </div>
        <div className="logo">
            <img src={Paytm} alt="gpay" />
        </div>
        </div>

      <div className="enterUpi">  
        <input type="text" placeholder='Enter UPI ID'/>
      </div>

      <div className='instruction'>
        <div className="num">
        <span>1</span>
          <p>Enter your UPI ID and click on Pay Now</p>
        </div>
        <div className="num">
        <span>2</span>
        <p>You will receive a request from Payment Gateway in your UPI App</p>
        </div>
        <div className="num">
        <span>3</span>
        <p>Login to UPI App by entering your mpin & authorize payment</p>
        </div>
      </div>

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

export default Midsec
