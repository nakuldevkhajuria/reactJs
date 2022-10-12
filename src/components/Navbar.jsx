


import React, { Component } from 'react';
import "./styles.css"
import "./home";
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

    render() {
        return (
            <>
            
            <nav >
                    <ul className='nav'>
                        <li>
                            <Link to="/home">Home</Link></li>
                        <li>
                            <Link to="/student">Students</Link></li>
                        <li>
                            <Link to="/contact">Contact US</Link>
                        </li>

                    </ul>
                  
                </nav></>
        );
    }

}
