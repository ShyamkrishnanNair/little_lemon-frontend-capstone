import React, { useState, useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import '../components/BookingForm.css';

const fetchAPI = async (date) => {
    // Simulate fetching data from an API
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                "17:00", "17:30", "18:00", "18:30", "19:00",
                "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"
            ]);
        }, 1000);
    });
};

const submitAPI = async (formData) => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 1000);
    });
};

const initializeTimes = async () => {
    const today = new Date().toISOString().split('T')[0];
    const times = await fetchAPI(today);
    return times;
};

const Reservation = () => {
    const navigate = useNavigate();
    const [bookingInfo, setBookingInfo] = useState({
        date: '',
        time: '17:00',
        guests: '',
        occasion: ''
    });

    const reducer = (state, action) => {
        switch (action.type) {
            case 'UPDATE_TIMES':
                return action.payload;
            default:
                return state;
        }
    };

    const [availableTimes, dispatch] = useReducer(reducer, []);

    useEffect(() => {
        const fetchInitialTimes = async () => {
            const times = await initializeTimes();
            dispatch({ type: 'UPDATE_TIMES', payload: times });
        };
        fetchInitialTimes();
    }, []);

    const handleDateChange = async (event) => {
        const selectedDate = event.target.value;
        setBookingInfo({
            ...bookingInfo,
            date: selectedDate
        });
        const times = await fetchAPI(selectedDate);
        dispatch({ type: 'UPDATE_TIMES', payload: times });
    };

    const submitForm = async (formData) => {
        const success = await submitAPI(formData);
        if (success) {
            navigate('/confirmed');
        } else {
            window.alert('Failed to submit booking.');
        }
    };

    return (
        <>
            <BookingForm
                bookingInfo={bookingInfo}
                setBookingInfo={setBookingInfo}
                availableTimes={availableTimes}
                onDateChange={handleDateChange}
                submitForm={submitForm}
            />
        </>
    );
};

export default Reservation;
