import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {

  return (

    <footer className='flex items-center justify-around bg-[#23180D] text-white h-[90px]'>
      <div>
        <p> &copy; TheMealDB</p>

      </div>

      <div className='flex gap-5 '>
        <NavLink to='/about'>About</NavLink>
        <NavLink>Faq</NavLink>
        <NavLink>Contact</NavLink>
      </div>

    </footer>


  )
}

export default Footer
