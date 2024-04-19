import React from 'react'
import { Link } from "react-router-dom"
import './Hero.css'
import HeroImg from '../images/restaurant-food.jpg'

export default function Hero() {
    return (
        <section className='hero'>
            <div className="hero-container">
                <div className="hero-content">
                    <p className='hero-title'>Little Lemon</p>
                    <p className='hero-location'>Chicago</p>
                    <p className='hero-desc'>We are a family owned Mediterranean restaurant, <br />
                        focused on traditional recipes served with a modern twist.</p>
                    <button className='reserve-btn'><Link to="/reservation">RESERVE A TABLE</Link></button>
                </div>

                <div className="img-container">
                    <img src={HeroImg} alt="" className='hero-img' />
                </div>
            </div>
        </section>
    )
}
