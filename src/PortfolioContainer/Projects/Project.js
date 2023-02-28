import React from 'react'
import './Project.css'

export default function Project() {

  const ProjectData = [
    {
      'name': 'Animated Login Page',
      'link': ''
    },
    {
      'name': 'Animated Login Page',
      'link': ''
    },
    {
      'name': 'Animated Login Page',
      'link': ''
    },
    {
      'name': 'Animated Login Page',
      'link': ''
    },
    {
      'name': 'Animated Login Page',
      'link': ''
    }
  ]

  return (
    <div>
      <h2 className='project-title'>Projects</h2>
      <div className='project-container'>
        {ProjectData.map(pjd => <ProjectList projectdata={pjd} />)}
      </div>

    </div>
  )
}

function ProjectList({ projectdata }) {
  return (
    <div>
      <div className="project-card">
        <img src={projectdata.link} alt="" />
        <h4>{projectdata.name}</h4>
        <a href={projectdata.link}>Visit Page</a>
      </div>
    </div>
  )
}