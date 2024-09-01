import React from 'react'
import './Styles/home.css';
import discount from './Assets/discount.png'
import { MdArrowOutward } from "react-icons/md";
import robohand from './Assets/robohand.png';

const Home = () => {
  return (
    <div id='home'>
      <div className='main'>
        <div className='main-1'>
          <div className='offer'>
            <img src={discount} alt='discount' height={40} className='dis'/>
            <p className='offer-1'>20% Discount For 1 Month Account</p>
          </div>
          <div className='next'>
            <h1 className='next-1'>The Next</h1>
            <h1 className='next-2'>Generation</h1>
            <div className='box'>
              <button className='but'>Get Started <MdArrowOutward className='arrowout'/></button>
            </div>
          </div>
          <div className='next2'>
            <h1 className='next-3'>Payment Method.</h1>
          </div>
          <div className='para'>
            <p className='para-1'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
          </div>
        </div>
        <div className='main-2'>
          <img src={robohand} alt='hand' className='robo-hand'/>
        </div>
      </div>
    </div>
  )
}

export default Home