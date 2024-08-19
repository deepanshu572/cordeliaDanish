import React from 'react'

const PriceDet = () => {
  return (
    <div className='b-2'>
    <div className="trip">
        <h5>Mumbai-Goa-Lakshadweep-Mumbai(5N/6D)</h5>

        <div>
            <div>
                <h6>Feb 15,2024</h6>
                <p>Saturday 06:30 PM</p>
            </div>
            <div>
                <h6>Feb 18,2024</h6>
                <p>Monday 10:00 AM</p>
            </div>
        </div>
        <div>
            <div>
                <h6>CABIN 1</h6>
                <p>Oceal View Cabin</p>
            </div>
            <div>
                <h6>GUEST No</h6>
                <p>04</p>
            </div>
        </div>
        <div>
            <div>
                <h6>CABIN 2</h6>
                <p>Mini Suite Cabin</p>
            </div>
            <div>
                <h6>GUEST No</h6>
                <p>04</p>
            </div>
        </div>
    </div>


      <div className="pdetail">
        <div>
            <h3>Price Detail</h3>
            <h6>Hide Price Breakup</h6>
        </div>
        <div>
            <h6>Ocean View Cabin</h6>
            <h6>₹18,260</h6>
        </div>
        <div>
            <h6>Mini Suite Cabin</h6>
            <h6>₹18,260</h6>
        </div>
        <div>
            <h6>Service Charge & Levies</h6>
            <h6>₹19,754</h6>
        </div>
        <div>
            <h6>Fuel Surcharge</h6>
            <h6>₹4,980</h6>
        </div>
        <div>
            <h6>Kids sail offer</h6>
            <h6>₹5,980</h6>
        </div>
        <div>
            <h6>Sub-total</h6>
            <h6>₹58,384</h6>
        </div>
        
        <div>
            <h6>Taxes</h6>
            <h6>₹14,109</h6>
        </div>
        <div>
            <h6>GST</h6>
            <h6>₹14,109</h6>
        </div>

        
        <div>
            <h3>Total Farer</h3>
            <h4>₹67,260</h4>
        </div>
        
        
      </div>
    </div>
  )
}

export default PriceDet
