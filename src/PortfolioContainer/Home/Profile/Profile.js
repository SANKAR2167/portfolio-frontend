import React from 'react'
import Typical from 'react-typical'
import './Profile.css';

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            <a href="https://twitter.com/iamsankarK">
                                <i className='fa fa-twitter'></i>
                            </a>
                            <a href="https://github.com/SANKAR2167">
                                <i className='fa fa-github'></i>
                            </a>
                            <a href="https://www.linkedin.com/in/sankar-kulandaivel/">
                                <i className='fa fa-linkedin'></i>
                            </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className='primary-text'>
                            {" "}
                            Hello, I'M <span className='highlighted-text'>Sankar</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                MERN Stack Developer
                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of building applications with front and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className='btn primary-btn'>
                            <a href="mailto:snakarkulandaivel@gmail.com">
                            Contact Me</a>
                        </button>
                        <a href="Sankar.pdf" download='Sankar Sankar.pdf'> <button className='btn highlighted-btn'>Get Resume</button></a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>
        </div>
    )
}
