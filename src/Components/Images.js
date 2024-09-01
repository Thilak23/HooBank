import React from 'react'
import './Styles/images.css';
import airbnb from './Assets/airbnb.png';
import binance from './Assets/binance.png';
import coinbase from './Assets/coinbase.png';
import dropbox from './Assets/dropbox.png';

const Images = () => {
  return (
    <div>
      <div className='image'>
        <img src={airbnb} alt='airbnb' className='airbnb'/>
        <img src={binance} alt='binance' className='binance'/>
        <img src={coinbase} alt='coinbase' className='coinbase'/>
        <img src={dropbox} alt='dropbox' className='dropbox'/>
      </div>
    </div>
  )
}

export default Images