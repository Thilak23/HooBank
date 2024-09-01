import React from 'react'
import './Styles/copyrights.css';
import insta from './Assets/insta.png';
import facebook from './Assets/facebook.png';
import twitter from './Assets/twitter.png';
import linkedin from './Assets/linkedin.png';

const Copyrights = () => {
  return (
    <div className='copyright'>
      <div className='copy'>
        <p><span className='rights'>Copyrights &copy;</span>  2024 HooBank. All Rights Reserved.</p>
      </div>
      <div className='social'>
        <img src={insta} alt='insta' className='insta'/>
        <img src={facebook} alt='facebook' className='facebook'/>
        <img src={twitter} alt='twitter' className='twitter'/>
        <img src={linkedin} alt='linkedin' className='linkedin'/>
      </div>
    </div>
  )
}

export default Copyrights