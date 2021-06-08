import React from 'react';
import './Contact.css'

class Contact extends React.Component {
    render() {
        return (
            <div id='contact'>
                <h2 className='section-title'>Contact Me...</h2>
                <h4 className='section-subtitle'>if you want to :)</h4>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <span className='contact-button'><h3><a href='mailto:piercelowe1@gmail.com'>Contact Me</a></h3></span>
                    <span className='contact-button'><h3><a href='./PierceLowe_CV_2021.pdf' download>My Resumé</a></h3></span>
                </div>
            </div>
        );
    }
}

export default Contact