import React from 'react';
import './Specials.css';
import GreekSalad from '../images/greek-salad.jpg';
import Bruschetta from '../images/bruschetta.jpg';
import LemonDessert from '../images/lemon-dessert.jpg';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Specials() {
    return (
        <section className='specials-container'>
            <header className="specials-heading">
                <p className='specials-title'>This week's specials!</p>
                <button className='menu-btn'>Online Menu</button>
            </header>
            <div className="specials-cards">
                <article className="special-card">
                    <img className="special-img" src={GreekSalad} alt="greek salad" />
                    <div className="name-price">
                        <p className="item-name">Greek Salad</p>
                        <p className="item-price">$12.99</p>
                    </div>
                    <div className="item-desc">
                        <p>The famous greek salad of crispy lettuce,
                            peppers, olives and our Chicago style feta cheese,
                            garnished with crunchy garlic and rosemary croutons. </p>
                    </div>
                    <div className="delivery">
                        Order a delivery
                        <FontAwesomeIcon icon={faMotorcycle} />
                    </div>
                </article>
                <article className="special-card">
                    <img className="special-img" src={Bruschetta} alt=" bruschetta" />
                    <div className="name-price">
                        <p className="item-name">Bruschetta</p>
                        <p className="item-price">$5.99</p>
                    </div>
                    <div className="item-desc">
                        <p>Our Bruschetta is made from grilled bread that has
                            been smeared with garlic and seasoned with salt and olive oil.  </p>
                    </div>
                    <div className="delivery">
                        Order a delivery<FontAwesomeIcon icon={faMotorcycle} />
                    </div>
                </article>
                <article className="special-card">
                    <img className="special-img" src={LemonDessert} alt="lemon-dessert" />
                    <div className="name-price">
                        <p className="item-name">Lemon Dessert</p>
                        <p className="item-price">$5.00</p>
                    </div>
                    <div className="item-desc">
                        <p>This comes straight from grandma’s recipe book,
                            every last ingredient has been sourced and is as
                            authentic as can be imagined. </p>
                    </div>
                    <div className="delivery">
                        Order a delivery<FontAwesomeIcon icon={faMotorcycle} />
                    </div>
                </article>
            </div>
        </section>
    );
}
