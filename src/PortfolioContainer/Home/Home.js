import React from 'react'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import './Home.css'


export default function Home() {
  return (
    <section className='home-container' id='home'>
      <Profile />
      <Footer />
    </section>
  )
}
