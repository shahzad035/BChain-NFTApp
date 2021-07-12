import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
export class Home extends Component {
    render() {
        return (
            <div>
                <p>Please choose a repository from the list below.</p>
                <ul>
                    <li>
                        <Router><Link to="/index">React</Link></Router></li>
                </ul>
            </div>
        )
    }
}

export default Home
