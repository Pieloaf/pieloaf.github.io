import React, { Component } from 'react';
import './NotFoundPage.css'

class NotFoundPage extends Component {

    render() {
        return (
            <div>
                <div className="not-found">
                    <h1>Page Not Found ;-;</h1>
                    <h2>I think you should turn back...</h2>
                    <h3 id='home'><a href='/'>Take me home.</a></h3>
                </div>

            </div>

        );
    }
}
export default NotFoundPage;