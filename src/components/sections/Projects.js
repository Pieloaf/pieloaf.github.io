import React from 'react';
import './Projects.css'
import Card from '../Card';
import folder from '../../data/images/folder-icon.png';
import discord from '../../data/images/discord-icon.png'
import darwin from '../../data/images/1v1.png'
import movie from '../../data/images/movie-bot.png'
import avocado from '../../data/images/avocado.png'
import twitch from '../../data/images/twitch.png'

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            more: 'Show More'
        }
        this.show_more = this.show_more.bind(this);
    }
    componentDidMount() {
        this.get_cards();
    }
    get_cards() {
        this.setState({
            cards: [
                <Card
                    heading='Darwin 1v1 League'
                    text='A community run project for a 1v1 League in the game Darwin Project. React front end, Node back end, Python Discord bot. Started in November 2020, it has grown to 800+ members.'
                    web='https://darwin1v1league.com'
                    gh='https://github.com/users/pieloaf/projects/1'
                    image={darwin}
                    primary='https://darwin1v1league.com'
                    footer={['Python', 'React.js', 'Node.js', 'Express', 'MySQL']}
                />,
                <Card heading='Dijkstra&#39;s Algorithm'
                    gh='https://github.com/Pieloaf/dijkstras-algorithm-cpp'
                    text='Originally made for a coding exam for an internship, it&#39;s my implementation of Dijkstra&#39;s shortest path algorithm in C++.'
                    primary='https://github.com/Pieloaf/dijkstras-algorithm-cpp'
                    footer={['C++']}
                    image={folder}
                />,
                <Card heading='Discord Movie Bot'
                    gh='https://github.com/Pieloaf/DiscordMovieNight'
                    text='A discord bot for hosting movie nights. It initially started out as a component of the Avocado Bot. I hope to host this on my own webserver soon so it can be added to multiple servers rather than each user needing to self-host.'
                    image={movie}
                    primary='https://github.com/Pieloaf/DiscordMovieNight'
                    footer={['Python']}
                />,
                <Card heading='Avocado Bot'
                    text='A Python discord bot initially made as a soundboard to play a soundclip of a dutch man shouting "Broccoli" has now grown into something much bigger. I will make the code for this public once I finish refactoring... for the 3rd time 🙃.'
                    dc='https://discord.gg/uSYdz6aC7r'
                    image={avocado}
                    primary='https://discord.gg/uSYdz6aC7r'
                    footer={['Python']}
                />,
                <Card heading='Robosumo (1st year Uni Project)'
                    web='https://pierobosumo.wordpress.com/'
                    text='A small project from my first year in uni. We were tasked with building a small robot to fight against robots built by other students at the end of the year'
                    primary='https://pierobosumo.wordpress.com/'
                    footer={['C++', 'Arduino']}
                    image={folder}
                />,
                <Card heading='Discord Themes'
                    gh='https://github.com/Pieloaf/Discord-Themes'
                    text='A custom discord theme written with CSS. This was my first real experience working with CSS and was inspired to make it so it would match a spotify theme I had downloaded.'
                    primary='https://github.com/Pieloaf/Discord-Themes'
                    footer={['CSS']}
                    image={discord}
                />
            ]
        })
    };

    show_more() {
        if (this.state.more === 'Show More') {
            this.setState({
                cards: [
                    ...this.state.cards,
                    <Card heading='Image to ASCII Art'
                        gh='https://github.com/Pieloaf/scripts/tree/master/Img2Ascii'
                        text='A small python script I wrote to convert images to ascii to art. It&#39;s a lil brokey so I should probably fix it up but yea. It was my first time working with OpenCV2.'
                        primary='https://github.com/Pieloaf/scripts/tree/master/Img2Ascii'
                        footer={['Python', 'OpenCV2']}
                        image={folder}
                    />,
                    <Card
                        heading='Twitch Things'
                        gh='https://github.com/Pieloaf/TwitchThings'
                        tw='https://www.twitch.tv/pieloaf'
                        text='A few small things I made for my twitch stream overlay. Written with Python and JavaScript. This project was my first experience with JS.'
                        image={twitch}
                        footer={['Python', 'JavaScript']}
                        primary='https://github.com/Pieloaf/TwitchThingss'
                    />
                ],
                more: 'Show Less'
            })
        }
        else {
            this.get_cards();
            this.setState({ more: 'Show More' });
        }
    }


    render() {
        return (
            <div id='projects'>
                <h2 className='section-title'>Some Projects I've Worked On...</h2>
                <h4 className='section-subtitle'>it's nothing much</h4>
                <ul className='project-cards'>
                    {this.state.cards}
                </ul >
                <h3 className='show-more' onClick={this.show_more}>{this.state.more}</h3>
                <footer><span>If you would like to see more work I've done, I share most things on my <a href='https://github.com/Pieloaf' target='_blank' rel='noopener noreferrer'>Github</a></span></footer>
            </div>
        )
    }
}

export default Projects;