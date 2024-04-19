import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
    it('renders Booking Form title', () => {
        const { getByText } = render(<BookingForm availableTimes={[]} bookingInfo={{}} setBookingInfo={() => { }} />);

        const bookingFormTitle = getByText('BOOKING FORM');
        expect(bookingFormTitle).toBeInTheDocument();
    });
});
