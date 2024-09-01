import React from 'react'
import './Styles/testimonial.css';
import quotes from './Assets/quotes.png';
import ppl1 from './Assets/ppl1.png';
import ppl2 from './Assets/ppl2.png';
import ppl3 from './Assets/ppl3.png';

const Testimonial = () => {
  return (
    <div id='solution'>
      <div className="testimonial">
        <div className='first'>
          <div className='quotes'>
            <img src={quotes} alt='quotes' className='quotes-img'/>
          </div>
          <div className='comment'>
            <p>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
          </div>
          <div className='profile'>
            <div className='ppl1'>
              <img src={ppl1} alt='ppl1' className='ppl1-img'/>
            </div>
            <div className='name'>
              <p className='n-1'>Herman Jensen</p>
              <p className='n-2'>Founder & Leader</p>
            </div>
          </div>
        </div>
        <div className='second'>
          <div className='quotes'>
            <img src={quotes} alt='quotes' className='quotes-img'/>
          </div>
          <div className='comment-s'>
            <p>Money makes your life easier. If you're lucky to have it, you're lucky.</p>
          </div>
          <div className='profile'>
            <div className='ppl2'>
              <img src={ppl2} alt='ppl2' className='ppl2-img'/>
            </div>
            <div className='name'>
              <p className='n-1'>Steve Mark</p>
              <p className='n-2'>Founder & Leader</p>
            </div>
          </div>
        </div>
        <div className='third'>
          <div className='quotes'>
            <img src={quotes} alt='quotes' className='quotes-img'/>
          </div>
          <div className='comment'>
            <p>It is usually people in the money business, finance, and international trade that are really rich.</p>
          </div>
          <div className='profile'>
            <div className='ppl3'>
              <img src={ppl3} alt='ppl3' className='ppl3-img'/>
            </div>
            <div className='name'>
              <p className='n-1'>Kenn Gallagher</p>
              <p className='n-2'>Founder & Leader</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial