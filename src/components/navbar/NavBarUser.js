import React from 'react'
import icon from '../../images/fire icon.svg'
import user from '../../images/profile avatar.jpg'

export default function NavBarUser() {
  return (
    <div className="navbar__user">
      <a href='google.com' className='toggle-button'>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </a>
      <div className="user__icon">
        <img src={icon} alt="icon" />
      </div>
      <div className="user__pic">
        <img src={user} alt="user pic" />
      </div>
    </div>
  )
}
