import React from 'react'
import netlogos from '../assets/netlogos.png'
import safe from '../assets/safe.png'


const NetBanking = () => {
  return (
    <>
    <div>
      <h3>Select Your Bank</h3>
      <div className="bank_logos">
      <img src={netlogos} alt="img"/>
      </div>

      <select className='select-bank'>
        <option value="hi">Select Your Bank</option>
        <option value="hi">SBI</option>
        <option value="hi">ICICI</option>
      </select>

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
      
    </>

    
  )
}

export default NetBanking
