import React from 'react'
import './AboutMe.css'
import AboutImage from '../../assets/home/profile.jpg'

export default function AboutMe() {
  return (
    <section className="about" id='aboutme'>
      <h2 className='about-title'>About Me</h2>
      <div className='about-container'>
        <div className="about-photo">
          <img src={AboutImage} alt="" />
        </div>
        <div className="about-content">
          <p>
            Hi I'm Sankar a full stack web developer. I did my bachelor degree in department of Mechanical Engineering from M.Kumarasamy College Of Engineering in Karur. I have 1 year of working experience in Quality Control Department. I'm so much interested in coding, then i joined web development to improve my career. Right now I'm a qualified and professional web developer with knowledge of frontend skills and backend skills.
          </p>
        </div>
      </div>
    </section>
  )
}
