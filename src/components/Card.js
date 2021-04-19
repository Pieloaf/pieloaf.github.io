import React from 'react';
import './Card.css'
import { IoLogoGithub, IoLogoDiscord, IoLogoTwitch } from 'react-icons/io5'
import { RiExternalLinkLine } from 'react-icons/ri'

const Card = (props) => {

    const get_links = () => {
        var links = []
        props.gh ? links.push(<li><a href={props.gh}><IoLogoGithub /></a></li>) : do_nothing();
        props.web ? links.push(<li><a href={props.web}><RiExternalLinkLine /></a></li>) : do_nothing();
        props.dc ? links.push(<li><a href={props.dc}><IoLogoDiscord /></a></li>) : do_nothing();
        props.tw ? links.push(<li><a href={props.tw}><IoLogoTwitch /></a></li>) : do_nothing();
        return links
    }
    const do_nothing = () => {
        //this is the only way I could figure to do nothing if there was no matching prop passed
    }
    const get_footer = () => {
        var footer = []
        props.footer.forEach(element => {
            footer.push(<li>{element}</li>)
        });
        return footer
    }

    return (
        <div onClick={() => { window.location = props.primary }} className='card-container'>
            <div className='card-header'>
                <div className='text'>
                    <h2 className='card-heading'>{props.heading}</h2>
                    <ul className='card-links'>
                        {get_links()}
                    </ul>
                </div>
                <img src={props.image} alt={props.heading} />
            </div>
            <div className='card-text'>
                <p className='card-body'>{props.text}</p>
            </div>
            <footer>
                <ul className='tech-used'>
                    {get_footer()}
                </ul>
            </footer>
        </div>
    )
}

export default Card;