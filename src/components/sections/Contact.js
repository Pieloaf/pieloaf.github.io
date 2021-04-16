import React from 'react';
import './Contact.css'

class Contact extends React.Component {
    render() {
        return (
            <div id='contact'>
                <h2 className='project-title'>Contact Me...</h2>
                <h4 className='project-subtitle'>if you want to :)</h4>
                <span className='contact-button'><h3><a href='mailto:piercelowe1@gmail.com'>Contact Me</a></h3></span>
            </div>
        );
    }
}

export default Contact