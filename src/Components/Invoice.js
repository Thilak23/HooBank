import React from 'react'
import './Styles/invoice.css';
import bill from './Assets/bill.png'
import apple from './Assets/apple.png';
import playstore from './Assets/playstore.png';

const Invoice = () => {
  return (
    <div className='invoice' id='features'>
      <div className='billing-1'>
        <div className='bill'>
          <img src={bill} alt='bill' className='bill-img'/>
        </div>
      </div>
      <div className='billing-2'>
        <div className='easy'>
          <p>Easily control your billing & invoicing.</p>
        </div>
        <div className='elite'>
          <p>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        </div>
        <div className='image-invoice'> 
          <img src={apple} alt='apple' className='apple-img'/>
          <img src={playstore} alt='playstore' className='playstore-img'/>
        </div>
      </div>
    </div>
  )
}

export default Invoice