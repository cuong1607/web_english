import React from 'react'
import './style.css'
import { Link ,NavLink} from 'react-router-dom'
import Logo from '../../access/Capture.PNG'
export const  Header = ()  => {
  return (
    <div className='header'>
        <div className='header-logo'>
            <img className='header-logo-items' src={Logo}></img>
            <h1 className='name'>English For Kid</h1>
        </div>
        <ul className='main-list'>
          <NavLink className='main-list-name main-list-name-home' to='/'>Home</NavLink>
          <NavLink className='main-list-name' to='/play-learning'>PlayLearning™</NavLink>
          <NavLink className='main-list-name' to='/english-for-kid'>English For Kids</NavLink>
          <li className='icon main-list-icon'><i class="fa-brands fa-facebook"></i></li>
          <li className='icon main-list-icon'><i class="fa-brands fa-instagram"></i></li>
          <li className='icon main-list-icon'><i class="fa-brands fa-twitter"></i></li>
          <li className='icon main-list-icon'><i class="fa-brands fa-youtube"></i></li>
        </ul>
    </div>
  )
}
