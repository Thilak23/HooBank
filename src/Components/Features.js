import React from 'react'
import './Styles/features.css';
import star from './Assets/star.png';
import shield from './Assets/shield.png'
import send from './Assets/send.png'

const Features = () => {
  return (
    <div id='about'>
      <div className='fea-main'>
        <div className='fea-main-1'>
          <div className='fea-head'>
            <p className='head-p'>You do the business, we'll handle the money.</p>
          </div>
          <div className='fea-pay'>
            <p className='pay-p'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
          </div>
          <div className='fea-start'>
            <button className='start'>Get Started</button>
          </div>
        </div>
        <div className='fea-main-2'>
          <div>
            <div className='payment'>
              <div className='star'>
                <img src={star} alt='star' height={30} className='star-img'/>
              </div>
              <div className='pay-1'>
                <p>Rewards</p>
                <p style={{color: "#ffffffb3"}}>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
              </div>
            </div>

            <div className='payment-2'>
              <div className='shield'>
                <img src={shield} alt='star' height={30} className='shield-img'/>
              </div>
              <div className='pay-2'>
                <p>100% Secured</p>
                <p style={{color: "#ffffffb3"}}>We take proactive steps make sure your information and transactions are secure.</p>
              </div>
            </div>

            <div className='payment-3'>
              <div className='send'>
                <img src={send} alt='star' height={30} className='send-img'/>
              </div>
              <div className='pay-3'>
                <p>Balance Transfer</p>
                <p style={{color: "#ffffffb3"}}>A balance transfer credit card can save you a lot of money in interest charges.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features