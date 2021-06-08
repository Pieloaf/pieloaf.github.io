import React from 'react';
import './Intro.css'
import ReactTooltip from 'react-tooltip';
import profilePic from '../../data/images/profile-pic.png'
import { IoLogoLinkedin, IoLogoGithub, IoLogoTwitter, IoLogoDiscord, IoDocumentText } from 'react-icons/io5'

class Intro extends React.Component {
    render() {
        return (
            <div id='intro-card'>
                <div className='intro-text'>
                    <h2>Heyo, my name is</h2>
                    <h1 className='line-two'>Pierce Lowe </h1><h2 className='line-two' id='pieloaf'>[Pieloaf]</h2>
                    <p>I'm a 21 y/o, Irish, <span className='highlight'>Computer and Communications Engineering Student </span> with a passion for software engineering. I'm in my 3rd year of studying at TUDublin. I also have love for art and music.</p>
                    <ul className='ext-links'>
                        <li><a href='https://github.com/pieloaf' target="_blank" rel="noopener noreferrer"><IoLogoGithub /></a></li>
                        <li><a href='https://www.linkedin.com/in/pierce-lowe/' target="_blank" rel="noopener noreferrer"><IoLogoLinkedin /></a></li>
                        <li><a href='./PierceLowe_CV_2021.pdf' download><IoDocumentText /></a></li>
                        <li><a href='https://twitter.com/pierce_lowe' target="_blank" rel="noopener noreferrer"><IoLogoTwitter /></a></li>
                        <li><span data-tip data-for='discord-tip' data-event='click' ><IoLogoDiscord /></span></li>
                        <ReactTooltip place="right" type="dark" effect="solid" id='discord-tip'>
                            <span>Discord: Pieloaf#1999</span>
                        </ReactTooltip>
                    </ul>
                </div>
                <div>
                    <img src={profilePic} id='profile-pic' alt='isa meee! :)' /></div></div >
        )
    }
}

export default Intro;