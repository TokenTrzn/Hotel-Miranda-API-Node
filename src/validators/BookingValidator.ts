import { BookingInterface } from '../interfaces/BookingInterface'

export const validateBooking = (booking: BookingInterface) => {    
    if (typeof booking.guestName !== 'string' || booking.guestName === null) {
        throw new Error('Invalid Name')
    }
    if (typeof booking.orderDate !== 'string' || booking.orderDate === null) {
        throw new Error('Invalid Date')
    }
    if (typeof booking.orderDateHour !== 'string' || booking.orderDateHour === null) {
        throw new Error('Invalid Hour')
    }
    if (typeof booking.checkIn !== 'string' || booking.checkIn === null) {
        throw new Error('Invalid Date')
    }
    if (typeof booking.checkInHour !== 'string' || booking.checkInHour === null) {
        throw new Error('Invalid Hour')
    }
    if (typeof booking.checkOut !== 'string' || booking.checkOut === null) {
        throw new Error('Invalid Date')
    }
    if (typeof booking.checkOutHour !== 'string' || booking.checkOutHour === null) {
        throw new Error('Invalid Hour')
    }
    if (typeof booking.specialRequest !== 'boolean' || booking.specialRequest === null) {
        throw new Error('Invalid Special Request')
    }
    if (!['Premium A', 'Premium B', 'Standard A', 'Standard B'].includes(booking.type)) {
        throw new Error('Invalid Type');
    }
    if (typeof booking.number !== 'number' || booking.number === null) {
        throw new Error('Invalid Number')
    }
    if (!['Check In', 'Check Out', 'In Progress'].includes(booking.status)) {
        throw new Error('Invalid Status');
    }
    if (typeof booking.price !== 'string' || booking.price === null) {
        throw new Error('Invalid Price')
    }
    if (typeof booking.description !== 'string' || booking.description === null) {
        throw new Error('Invalid Description')
    }
    if (!Array.isArray(booking.amenities) || booking.amenities.some(a => typeof a !== 'string')) {
        throw new Error('Invalid Amenities');
    }
    if (!Array.isArray(booking.rooms) || booking.rooms.some(b => typeof b !== 'object' || b === null)) {
        throw new Error('Invalid Rooms');
    }
}