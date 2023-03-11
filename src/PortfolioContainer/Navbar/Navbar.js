import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './navbar.css'
import MenuIcon from '@mui/icons-material/Menu';


export default function Navbar() {

  const [show, setShow] = useState(true)

  const handleShow = () => {
    setShow(current => !current)
  }
  return (
    <header>
      <div className="nav">
        <div className="logo">
          Sankar Kulandaivel
        </div>
        {show &&
          <div className="nav-menu">
            <Link className='menu' smooth to='#home'>Home</Link>
            <Link className='menu' smooth to='#aboutme'>About Me</Link>
            <Link className='menu' smooth to='#skills'>Skills</Link>
            <Link className='menu' smooth to='#project'>Project</Link>
          </div>
        }
        <button className='toggle' onClick={handleShow}><MenuIcon /></button>
      </div>
    </header>
  )
}
