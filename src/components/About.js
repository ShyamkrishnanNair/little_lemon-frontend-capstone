import React from 'react';
import './About.css';
import chef1 from '../images/chef1.jpg';
import chef2 from '../images/Chef2.jpg';

export default function About() {
    return (
        <section className='about'>
            <div className="about-card">
                <div className="about-info">
                    <p className='hero-title'>Little Lemon</p>
                    <p className='hero-subtitle'>Chicago</p>
                    <p className='about-description'>Welcome to Little Lemon, where tradition meets innovation in every dish we serve. Nestled in the heart of Chicago, our family-owned restaurant takes pride in offering a culinary journey through the vibrant flavors of the Mediterranean.</p>
                    <p className='about-description'>
                        At Little Lemon, we believe in the power of tradition. Our recipes are deeply rooted in the rich culinary heritage of the Mediterranean region, passed down through generations of our family. With a commitment to authenticity, we carefully select the finest ingredients, ensuring each dish reflects the true essence of Mediterranean cuisine.
                    </p>
                    <p className='about-description'>
                        However, tradition alone does not define us. We infuse our menu with a modern twist, inspired by our passion for innovation and creativity. From classic favorites to innovative creations, every dish at Little Lemon tells a story of tradition reimagined.
                    </p>
                    <p className='about-description'>
                        Our cozy atmosphere invites you to experience the warmth and hospitality of our family. Whether you're joining us for a casual lunch, intimate dinner, or special celebration, our dedicated team is here to ensure your dining experience is nothing short of exceptional. Beyond serving delicious food, we strive to create lasting memories for our guests. Our commitment to excellence extends beyond the kitchen, as we continuously seek new ways to delight and inspire our patrons.
                    </p>
                    <p className='about-description'>
                        Thank you for choosing Little Lemon as your culinary destination. We invite you to savor the flavors, embrace the ambiance, and become part of our extended family. Join us on a journey where every meal is an exploration of tradition, innovation, and the joy of good food shared with loved ones.
                    </p>
                    <h3>Welcome to Little Lemon.</h3>
                </div>
                <div className="about-img-container">
                    <div className="about-img">
                        <img src={chef1} alt="Chef 1" />
                        <img src={chef2} alt="Chef 2" />
                    </div>
                </div>
            </div>
        </section>
    );
}
