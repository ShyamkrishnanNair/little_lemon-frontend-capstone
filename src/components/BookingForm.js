import React from 'react';

function BookingForm({ availableTimes, bookingInfo, setBookingInfo, onDateChange, submitForm }) {
    const { date, time, guests, occasion } = bookingInfo;

    const handleTimeChange = (event) => {
        setBookingInfo({ ...bookingInfo, time: event.target.value });
    };

    const handleGuestsChange = (event) => {
        const inputGuests = event.target.value;
        if (inputGuests > 10) {
            window.alert("Max limit is 10 per booking");
        } else {
            setBookingInfo({ ...bookingInfo, guests: inputGuests });
        }
    };

    const handleOccasionChange = (event) => {
        setBookingInfo({ ...bookingInfo, occasion: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        submitForm(bookingInfo);
    };

    return (
        <div className="form-container">
            <div className="header-bar">
                <h2>BOOKING FORM</h2>
            </div>
            <form className='booking-form' onSubmit={handleSubmit}>
                <label htmlFor="res-date">Date</label>
                <input type="date" id="res-date" value={date} onChange={onDateChange} />

                <label htmlFor="res-time">Time</label>
                <select id="res-time" value={time} onChange={handleTimeChange}>
                    {availableTimes.map((timeOption, index) => (
                        <option key={index} value={timeOption}>{timeOption}</option>
                    ))}
                </select>

                <label htmlFor="guests">Number of Guests</label>
                <input type="number" placeholder="Up to 10 members" min="1" max="10" id="guests" value={guests} onChange={handleGuestsChange} />

                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={handleOccasionChange}>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Other">Other</option>
                </select>

                <input type="submit" value="RESERVE" />
            </form>
        </div>
    );
}

export default BookingForm;
