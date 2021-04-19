import React, { Component } from 'react';
import './HomePage.css'
import Intro from '../components/sections/Intro'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects';
import Header from '../components/header/Header'
import Contact from '../components/sections/Contact'

class HomePage extends Component {

    render() {
        return (
            <div>
                <Header className='header' />
                <div className="main">
                    <div className='section'>
                        <Intro />
                        <About />
                        <Projects />
                        <Contact />
                    </div>
                </div>
                <footer className='home-footer'><a href='https://github.com/pieloaf' target='_blank' rel="noopener noreferrer">Designed &amp; Made by Pierce Lowe [Pieloaf]</a></footer>
            </div >
        );
    }
}

export default HomePage;