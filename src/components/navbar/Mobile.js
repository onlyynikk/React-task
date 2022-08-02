import React, { useState } from 'react'
import { TbMenu2 } from 'react-icons/tb'
import { MdClose } from 'react-icons/md'
import MobileNavbar from './MobileNavbar'

function Mobile() {
  const [open, setOpen] = useState(false)
  const hamburgerMenu = (
    <TbMenu2
      onClick={() => setOpen(!open)}
      color="white"
      size="35px"
      className="menuOpen"
    />
  )

  const closeIcon = (
    <MdClose
      onClick={() => setOpen(!open)}
      color="white"
      size="35px"
      className="menuOpen"
    />
  )
  return (
    <nav className="mobile__menu">
      {open ? closeIcon : hamburgerMenu}
      {open && <MobileNavbar />}
    </nav>
  )
}

export default Mobile
