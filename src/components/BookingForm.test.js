import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingForm from './BookingForm';

test('Date input has correct attributes', () => {
    render(<BookingForm availableTimes={[]} bookingInfo={{ date: '', time: '', guests: '', occasion: '' }} setBookingInfo={() => { }} onDateChange={() => { }} submitForm={() => { }} />);
    const dateInput = screen.getByLabelText(/Date/i);
    expect(dateInput).toHaveAttribute('type', 'date');
});

test('Time select has correct attributes', () => {
    render(<BookingForm availableTimes={[]} bookingInfo={{ date: '', time: '', guests: '', occasion: '' }} setBookingInfo={() => { }} onDateChange={() => { }} submitForm={() => { }} />);
    const timeSelect = screen.getByLabelText(/Time/i);
    expect(timeSelect).toHaveAttribute('id', 'res-time');
});

test('Guests input has correct attributes', () => {
    render(<BookingForm availableTimes={[]} bookingInfo={{ date: '', time: '', guests: '', occasion: '' }} setBookingInfo={() => { }} onDateChange={() => { }} submitForm={() => { }} />);
    const guestsInput = screen.getByLabelText(/Number of Guests/i);
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toHaveAttribute('placeholder', 'Up to 10 members');
});

test('Occasion select has correct attributes', () => {
    render(<BookingForm availableTimes={[]} bookingInfo={{ date: '', time: '', guests: '', occasion: '' }} setBookingInfo={() => { }} onDateChange={() => { }} submitForm={() => { }} />);
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    expect(occasionSelect).toHaveAttribute('id', 'occasion');
});
