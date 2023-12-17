import React from 'react'
import './Specials.css'
import GreekSalad from '../images/greek-salad.jpg'
import Bruschetta from '../images/bruschetta.jpg'
import LemonDessert from '../images/lemon-dessert.jpg'

export default function Specials() {
    return (
        <div className='specials-container'>
            <div className="specials-heading">

                <p className='specials-title'>This week's specials!
                </p>

                <button className='menu-btn'>Online Menu</button>
            </div>
            <div className="specials-cards">
                <div className="special-card">
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
                        <p>Order a delivery</p>
                    </div>
                </div>
                <div className="special-card">
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
                        <p>Order a delivery</p>
                    </div>
                </div>
                <div className="special-card">
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
                        <p>Order a delivery</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
