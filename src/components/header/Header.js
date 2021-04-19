import React, { useState, useEffect, useCallback } from 'react';
import './Header.css'
import { Squash as Hamburger } from 'hamburger-react'
import { Link } from "react-scroll";

const Header = () => {
    const [usingDesktop, setDesktop] = useState();
    const [open, setOpen] = useState(false);

    const display_menu = useCallback(() => {
        var menu_items = []
        var mode = usingDesktop ? 'd-nav-menu' : 'm-nav-dropdown'
        if (open) {
            menu_items = [
                <li className='menu-item'>
                    <Link className='link' to='about' href='' onClick={() => { setOpen(usingDesktop ? true : !open) }} smooth duration={500}>About</Link>
                </li>,
                <li className='menu-item'>
                    <Link className='link' to='projects' href='' onClick={() => { setOpen(usingDesktop ? true : !open) }} smooth duration={500}>Projects</Link>
                </li>,
                <li className='menu-item'>
                    <Link className='link' to='contact' href='' onClick={() => { setOpen(usingDesktop ? true : !open) }} smooth duration={500}>Contact</Link>
                </li>]
        }
        return <ul className={mode}> {menu_items} </ul>
    }, [open, usingDesktop])

    const get_right_side = useCallback(() => {
        if (!usingDesktop) {
            return (
                <div className='m-nav-menu'>
                    <Hamburger rounded size={36} toggled={open} onToggle={() => { setOpen(!open) }} />
                    {open && display_menu()}
                </div>
            )
        } else {
            return display_menu()
        }
    }, [usingDesktop, open, display_menu])

    //handling resizing window
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 700 && usingDesktop) {
                setDesktop(false)
                setOpen(false)
            }
            else if (window.innerWidth >= 700 && !usingDesktop) {
                setDesktop(true)
                setOpen(true)
            }
            get_right_side()
        }
        handleResize()
        window.addEventListener("resize", handleResize);

        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    }, [usingDesktop, get_right_side])

    return (<div className='header'>
        <div className='header-bar'>
            <div className='left-side'>
                <h1 id='title'>Pierce Lowe</h1>
            </div>
            <div className='right-side'>
                {get_right_side()}
            </div>
        </div>
    </div>)
}

export default Header;