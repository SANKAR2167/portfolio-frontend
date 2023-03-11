import React from 'react'
import './Skill.css'

export default function Skill() {

  const Skill = [
    {
      'Name': 'Html5',
      'Logo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    }, {
      'Name': 'Css3',
      'Logo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    }, {
      'Name': 'JS',
      'Logo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    }, {
      'Name': 'React',
      'Logo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    }, {
      'Name': 'Redux',
      'Logo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
    }, {
      'Name': 'Node',
      'Logo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg'
    }, {
      'Name': 'Express',
      'Logo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
    }, {
      'Name': 'MongoDB',
      'Logo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    }, {
      'Name': 'Vs Code',
      'Logo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
    }, {
      'Name': 'GitHub',
      'Logo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    }]

  return (
    <section className='Skill' id='skills'>
      <h2 className='skill'>Skills & Tools</h2>
      <p className="skill-text">
        Without sharpen your weapon; standing on the battlefield would not
        increase your chance of winning
      </p>
      <div className='skill-container'>
        {Skill.map(skl => <SkillData skilldata={skl} />)}
      </div>
    </section>
  )
}

function SkillData({ skilldata }) {
  return (
    <div>
      <div className='card-container'>
        <div className="card">
          <img className='skill-logo' src={skilldata.Logo} alt={skilldata.Name} />

          <h5>{skilldata.Name}</h5>
        </div>
      </div>
    </div>
  )
}
