import React from 'react'
import logo from '../../images/LOGO.png'

export default function NavBarlogo() {
  return (
    <div className="navbar__logo__container">
      <img src={logo} alt="company logo" className="logo__image" />{' '}
    </div>
  )
}
