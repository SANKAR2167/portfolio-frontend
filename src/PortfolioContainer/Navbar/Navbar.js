import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import MenuIcon from '@mui/icons-material/Menu';


export default function Navbar() {

  const [show, setShow] = useState(true)

  const handleShow = () => {
    setShow (current => !current)
  }
  return (
    <header>
      <div className="logo">
        Sankar Kulandaivel
      </div>
      {show &&
        <div className="nav-menu">
          <Link className='menu' to= 'Home'>Home</Link>
          <Link className='menu' to= 'AboutMe'>About Me</Link>
          <Link className='menu' to='Skill'>Skills</Link>
          <Link className='menu' to='Project'>Project</Link>
        </div>
      }
      <button className='toggle' onClick={handleShow}><MenuIcon /></button>
    </header> 
  )
}
