import React from 'react'
import './Styles/footer.css';
import logo from './Assets/logo.png';

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='foot-1'>
          <img src={logo} alt="Logo"/>
          <p>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className='foot-2'>
          <div>
            <ul>
              <h4 className='link-1'>Useful Links</h4>
              <li>Content</li>
              <li>How it Works</li>
              <li>Create</li>
              <li>Explore</li>
              <li>Terms & Services</li>
            </ul>
          </div>
          <div>
            <ul>
              <h4 className='link-1'>Community</h4>
              <li>Help Center</li>
              <li>Partners</li>
              <li>Suggestions</li>
              <li>Blog</li>
              <li>Newsletters</li>
            </ul>
          </div>
          <div>
            <ul>
              <h4 className='link-1'>Partner</h4>
              <li>Our Partner</li>
              <li>Become a Partner</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='border'></div>
    </div>
  )
}

export default Footer