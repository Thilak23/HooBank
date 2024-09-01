import React from 'react'
import './Styles/card.css';
import card from './Assets/card.png';

const Card = () => {
  return (
    <div>
      <div className='card'>
        <div className='card-main-1'>
          <div className='card-head'>
            <p className='head-p'>Find a better card deal in few easy steps.</p>
          </div>
          <div className='card-pay'>
            <p className='card-p'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
          </div>
          <div className='card-start'>
            <button className='start'>Get Started</button>
          </div>
        </div>
        <div className='card-2'>
          <div className='cardpic'>
            <img src={card} alt='card' className='card-img'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card