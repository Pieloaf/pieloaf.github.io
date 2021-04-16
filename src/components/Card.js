import React from 'react';
import './Card.css'
import { IoLogoGithub, IoLogoDiscord, IoLogoTwitch } from 'react-icons/io5'
import { RiExternalLinkLine } from 'react-icons/ri'

class Card extends React.Component {

    get_links() {
        var links = []
        this.props.gh ? links.push(<li><a href={this.props.gh}><IoLogoGithub /></a></li>) : this.do_nothing();
        this.props.web ? links.push(<li><a href={this.props.gh}><RiExternalLinkLine /></a></li>) : this.do_nothing();
        this.props.dc ? links.push(<li><a href={this.props.dc}><IoLogoDiscord /></a></li>) : this.do_nothing();
        this.props.tw ? links.push(<li><a href={this.props.tw}><IoLogoTwitch /></a></li>) : this.do_nothing();
        return links
    }
    do_nothing() {
        //this is the only way I could figure to do nothing if there was no matching prop passed
    }
    get_footer() {
        var footer = []
        this.props.footer.forEach(element => {
            footer.push(<li>{element}</li>)
        });
        return footer
    }

    render() {
        return (
            <a href={this.props.primary} className='card-container'>
                <div className='card-header'>
                    <div className='text'>
                        <h2 className='card-heading'>{this.props.heading}</h2>
                        <ul className='card-links'>
                            {this.get_links()}
                        </ul>
                    </div>
                    <img src={this.props.image} alt={this.props.heading} />
                </div>
                <div className='card-text'>
                    <p className='card-body'>{this.props.text}</p>
                </div>
                <footer>
                    <ul className='tech-used'>
                        {this.get_footer()}
                    </ul>
                </footer>
            </a>
        )
    }
}

export default Card;