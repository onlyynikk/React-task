import React from 'react'
import NavTitle from './NavBarTitle'
import NavBarItems from './NavBarItems'
import NavBarUser from './NavBarUser'
import Mobile from './Mobile'
function Navbar() {
  return (
    <div className="container">
      <NavTitle />
      <NavBarItems />
      <NavBarUser />
      <Mobile />
    </div>
  )
}

export default Navbar
