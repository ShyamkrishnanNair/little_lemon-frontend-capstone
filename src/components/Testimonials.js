import React from 'react'
import './Testimonials.css'
import TestimonialData from './TestimonialData.json'

export default function Testimonials() {
    return (


        <div className='testimonials'>

            {TestimonialData.map((testimonial, index) => (
                <div className="testimonial-card" key={index}>
                    <img src={`${testimonial.image}`} alt={testimonial.name} />
                    <h3>{testimonial.name}</h3>
                    <h5>{testimonial.rating}</h5>
                    <blockquote>"{testimonial.testimonial}"</blockquote>
                </div>
            ))}
        </div>

    )
}
