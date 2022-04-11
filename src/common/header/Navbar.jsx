import React, { useState } from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='catgrories d_flex'>
            <span className='fa-solid fa-border-all'></span>
            <h4>
              Categories <i className='fa fa-chevron-down'></i>
            </h4>
          </div>

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              <li>
                <NavLink to='/'>home</NavLink>
              </li>
              <li>
                <NavLink exact to='/pages'>pages</NavLink>
              </li>
              <li>
                <NavLink exact to='/user'>user account</NavLink>
              </li>
              <li>
                <NavLink exact to='/vendor'>vendor account</NavLink>
              </li>
              <li>
                <NavLink exact to='/track'>track my order</NavLink>
              </li>
              <li>
                <NavLink exact to='/contact'>contact</NavLink>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
