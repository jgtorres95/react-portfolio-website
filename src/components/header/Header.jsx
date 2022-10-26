import React from 'react'
import './header.css'
import CallToAction from './CallToAction'
import ME from '../../assets/me.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
   <header>
     <div className="container header__container">
       <h5>Hello I'm</h5>
       <h1>Jose Torres</h1>
       <h5 className="text-light">Full Stack Developer</h5>
       <CallToAction />
     </div>
   </header>
  )
}

export default Header

