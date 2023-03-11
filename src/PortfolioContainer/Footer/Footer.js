import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './Footer.css'
export default function Footer() {
    return (
        <section className='footer'>
            <div className="footer-container">
                <div className="footer-nav">
                    <ul>
                        <li>
                            <Link className='footer-link' smooth to="#home">Home</Link>
                            <Link className='footer-link' smooth to="#aboutme">About Me</Link>
                            <Link className='footer-link' smooth to="#skills">Skill</Link>
                            <Link className='footer-link' smooth to="#project">Project</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <div className="social">
                        <a href="https://twitter.com/iamsankarK">
                            <i className='fa fa-twitter'></i>
                        </a>
                        <a href="https://www.linkedin.com/in/sankar-kulandaivel/">
                            <i className='fa fa-linkedin'></i>
                        </a>
                    </div>
                    <div className="mail">
                        <button className='btn-footer'>
                            <a href="mailto:snakarkulandaivel@gmail.com">Contact Mail</a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
