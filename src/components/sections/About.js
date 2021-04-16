import React from 'react';
import './About.css'
import pc_icon from '../../data/images/pc-icon.png'

class About extends React.Component {
    render() {
        return (
            <div id='about'>
                <div className='about-header'>
                    <h2 className='about-title'>About Me...</h2>
                    <h4 className='about-subtitle'>well, just about my programming</h4>
                </div>
                <div className='about-body'>
                    <div className='right-side'>
                        <img src={pc_icon} className='pc_icon' alt='idk, a sketch of an old pc' />
                        <ul className='languages'>
                            <li>Python</li>
                            <li>C++</li>
                            <li>Matlab</li>
                            <li>Javascript</li>
                            <li>HTML & CSS</li>
                        </ul>
                    </div>
                    <div className='about-text'>
                        <p>Heyo, I'm Pierce and I love creating things. I've always loved making things and since 2018s or so I've started to put my creativity into software development and coding<br /><br />My interest in coding really took off in the summer of 2020 when I started using Python to write Discord bots. I was already comfortable with the language and many other programming concepts from studying C++ in Uni, but this was my first project that was being used by people (my friends) everyday for the last year and has taught me a lot</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;