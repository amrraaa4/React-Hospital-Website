import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.png'
import "./navbar.css"

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#wgpt3">Ratings</a></p>
  <p><a href="#features">Sections</a></p>
  <p><a href="#possibility">Possibilites</a></p>
  <p><a href="#blog">Why Us?</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='navbar-sign'>
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='navbar-menu'>
        {toggleMenu ? <RiCloseLine color="#fff" size={27} onClick={()=>setToggleMenu(false)} /> : <RiMenu3Line color="#fff" size={27} onClick={()=>setToggleMenu(true)} />}

        {toggleMenu && (
          <div className='navbar-menu_container scale-up-center'>
            <div className='navbar-menu_container-links'>
              <Menu />
              <div className='navbar-menu_container-links-sign'>
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar