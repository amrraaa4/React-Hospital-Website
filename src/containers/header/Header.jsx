import React from 'react'
import './header.css'
import people from '../../assets/Group 81.png'
import doctor from "../../assets/doctor.png"

const Header = () => {
  return (
    <div className='header section__padding' id='home'>
      <div className='header-content'>
        <h1 className='gradient__text'>Heart Beat - We care. </h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia aut ipsa illum illo incidunt porro magni labore libero ad quasi. Quaerat at voluptatum corporis sapiente commodi perspiciatis deleniti quidem sit.</p>
        <div className='input'>
          <input type="email" placeholder='Rate your experience'/>
          <button type='button'>Rate</button>
        </div>
        <div className='header-content-people'>
          <img src={people} alt="people" />
          <p>1600 people rated good service.</p>
        </div>
      </div>        
      <div className='header-img'>
          <img src={doctor} alt="ai" />
        </div>
    </div>
  )
}

export default Header