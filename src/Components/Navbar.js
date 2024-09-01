import React, { useState } from 'react';
import './Styles/navbar.css';
import logo from './Assets/logo.png';
import menu from './Assets/menu.png';
import close from './Assets/close.png';


const Navbar = () => {
  const [menuOpen,setMenuopen] = useState(false);
  
  const handleChange = () => {
    setMenuopen(!menuOpen);
}

  return (
    <div>
      <div className='navbar'>
        <div className="logo">
          <img src={logo} alt='logo' height={32} className='img-logo'/>
        </div>
        <div className={menuOpen ? 'open' : 'link'}>
          <ul className='ul-link'>
            <li className='li-link-home'><a href='#home' className='home'>Home</a></li>
            <li className='li-link-about'><a href='#about' className='about'>About Us</a></li>
            <li className='li-link-fea'><a href='#features' className='features'>Features</a></li>
            <li className='li-link-sol'><a href='#solution' className='solution'>Solution</a></li>
          </ul>
        </div>
        <div className='menu' onClick={handleChange}>
          <img src={menuOpen ? close : menu} alt='menu' height={25} className='menu-icon'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar