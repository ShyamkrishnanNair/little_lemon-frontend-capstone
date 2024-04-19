import React from 'react'
import './Header.css'
import { Link } from "react-router-dom"
import Logo from '../images/logo.png'


export default function Header() {
    return (
        <div className='header'>
            <Link to="/"> <img src={Logo} alt="Little Lemon" /></Link>
            <div className='navbar'>
                <ul>
                    <li><Link to="/" ><span className='nav-item'> HOME</span></Link></li>
                    <li><a href="#"><span className='nav-item'>ABOUT</span></a></li>
                    <li><a href="#"><span className='nav-item'>MENU</span></a></li>
                    <li><Link to="/reservation"><span className='nav-item'>RESERVATIONS</span></Link></li>
                    <li><a href="#"><span className='nav-item'>ORDER ONLINE</span></a></li>
                    <li><a href="#"><span className='nav-item'>LOGIN</span></a></li>


                </ul>
            </div>
        </div>
    )
}
