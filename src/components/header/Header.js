import React from 'react';
import './Header.css'
import { Squash as Hamburger } from 'hamburger-react'
import { Link } from "react-scroll";

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            desktop: true
        };
    }

    handleResize() {
        if (window.innerWidth < 900) {
            this.setState({ desktop: false })
        } else { this.setState({ desktop: true }) }
        this.get_right_side()
    };
    componentDidMount() {
        this.handleResize();
        window.addEventListener("resize", this.handleResize.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize.bind(this));
    }
    get_right_side() {
        var desktop =
            <ul className='nav-menu'>
                <li className='menu-item'>
                    <Link className='link' to='about' href='' smooth duration={500}>About</Link>
                </li>
                <li className='menu-item'>
                    <Link className='link' to='projects' href='' smooth duration={500}>Projects</Link>
                </li>
                {/* <li className='menu-item'>
                    <Link className='link' to='interests' href='' smooth duration={500}>Interests</Link>
                </li> */}
                <li className='menu-item'>
                    <Link className='link' to='contact' href='' smooth duration={500}>Contact</Link>
                </li>
            </ul>
        var mobile =
            <Hamburger rounded size={36} toggled={false} onToggle={toggled => {
                toggled = toggled ? true : false;
            }} />

        if (!this.state.desktop) {
            return mobile;
        }
        return desktop
    }

    render() {
        return (
            <div className='header'>
                <div className='left-side'>
                    <h1 id='title'>Pierce Lowe</h1>
                </div>
                <div className='right-side'>
                    {this.get_right_side()}
                </div>
            </div>
        )
    }
}

export default Header;