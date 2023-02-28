import React from 'react'
import './AboutMe.css'
import AboutImage from '../../assets/home/profile.jpg'

export default function AboutMe() {
  return (
    <div className="about">
      <h2 className='about-title'>About Me</h2>
      <div className='about-container'>
        <div className="about-photo">
          <img src={AboutImage} alt="" />
        </div>
        <div className="about-content">
          <p>
            Hi I'm Sankar a full stack web developer. I did my bachelor degree in department of Mechanical Engineering from M.Kumarasamy College Of Engineering in Karur. I'm so much interested in coding. Right now I'm a qualified and professional web developer with knowledge of frontend skills and backend skills.
          </p>
        </div>
      </div>
    </div>
  )
}
