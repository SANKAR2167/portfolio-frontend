import React from 'react'
import './Project.css'

export default function Project() {

  const ProjectData = [
    {
      'name': 'Animated Login Page with HTML CSS JS',
      'image': '',
      'link': '',
      'git': ''
    },
    {
      'name': 'Animated Login Page',
      'image': '',
      'link': '',
      'git': ''
    },
    {
      'name': 'Animated Login Page',
      'image': '',
      'link': '',
      'git': ''
    },
    {
      'name': 'Animated Login Page',
      'image': '',
      'link': '',
      'git': ''
    }
  ]

  return (
    <section>
      <h2 className='project-title'>Projects</h2>
      <div className='project-container'>
        {ProjectData.map(pjd => <ProjectList projectdata={pjd} />)}
      </div>

    </section>
  )
}

function ProjectList({ projectdata }) {
  return (
    <div>
      <div className="project-card">
        <img className='project-image' src={projectdata.image} alt="" />
        <h4 className='project-name'>{projectdata.name}</h4>
        <div className="button">
          <a className='btn-git' href={projectdata.git} target='_blank'>GitHub</a>
          <a className='btn-link' href={projectdata.link} target='_blank'>Visit Page</a>
        </div>
      </div>
    </div>
  )
}