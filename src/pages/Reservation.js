import React, { useState, useReducer } from 'react';
import BookingForm from '../components/BookingForm';
import '../components/BookingForm.css';

export const initializeTimes = () => {
    return [
        "17:00", "17:30", "18:00", "18:30", "19:00",
        "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"
    ];
};

export default function Reservation() {
    const [bookingInfo, setBookingInfo] = useState({
        date: '',
        time: '17:00',
        guests: '',
        occasion: ''
    });

    const reducer = (state, action) => {
        switch (action.type) {
            case 'UPDATE_TIMES':
                return [
                    "17:00", "17:30", "18:00", "18:30", "19:00",
                    "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"
                ];
            default:
                return state;
        }
    };

    const [availableTimes, dispatch] = useReducer(reducer, [], initializeTimes);

    const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        setBookingInfo({
            ...bookingInfo,
            date: selectedDate
        });
        dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
    };

    return (
        <>
            <BookingForm
                bookingInfo={bookingInfo}
                setBookingInfo={setBookingInfo}
                availableTimes={availableTimes}
                onDateChange={handleDateChange} />
        </>
    )
}
