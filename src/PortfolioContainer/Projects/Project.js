import React from 'react'
import './Project.css'
import loginpage from '../../assets/project/loginpage.jpg'


export default function Project() {

  const ProjectData = [
    {
      'name': 'Login Page',
      'image': loginpage,
      'link': 'https://sankar-loginpage.netlify.app/',
      'git': 'https://github.com/SANKAR2167/login-page'
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
    <section id='project'>
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