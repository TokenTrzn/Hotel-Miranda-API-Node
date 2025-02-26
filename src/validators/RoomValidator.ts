import { RoomInterface } from '../interfaces/RoomInterface'

export const validateRoom = (room: RoomInterface) => {    
    if (typeof room.photo !== 'string' || room.photo === null) {
        throw new Error('Invalid File')
    }
    if (typeof room.number !== 'number' || room.number === null) {
        throw new Error('Invalid Number')
    }
    if (typeof room.name !== 'string' || room.name === null) {
        throw new Error('Invalid Name')
    }
    if (typeof room.type !== 'string' || room.type === null) {
        throw new Error('Invalid Type')
    }
    if (!Array.isArray(room.amenities) || room.amenities.some(a => typeof a !== 'string')) {
        throw new Error('Invalid Amenities');
    }
    if (typeof room.price !== 'string' || room.price === null) {
        throw new Error('Invalid Price')
    }
    if (typeof room.offerPrice !== 'boolean' || room.offerPrice === null) {
        throw new Error('Invalid Offer Price')
    }
    if (!['Available', 'Booked'].includes(room.status)) {
        throw new Error('Invalid Status');
    }
    if (!Array.isArray(room.bookings) || room.bookings.some(b => typeof b !== 'object' || b === null)) {
        throw new Error('Invalid Bookings');
    }
}