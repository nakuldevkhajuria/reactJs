


import React, { Component } from 'react';
import "./styles.css"


export default class Navbar extends Component {

    render() {
        return (
            <>
            
            <nav >
                    <ul className='nav'>
                        <li>
                            <a href="/">Home</a></li>
                        <li>
                            <a href="/student">Students</a></li>
                        <li>
                            <a href="/contact">Contact US</a>
                        </li>

                    </ul>
                  
                </nav></>
        );
    }

}
