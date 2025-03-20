import { BookingInterface } from "./BookingInterface";

export interface RoomInterface {
    id: string;
    photo: string;
    number: number;
    name: string;
    type: string;
    amenities: string[];
    price: string;
    offerPrice: string;
    status: 'Booked' | 'Available';
    bookings: BookingInterface[]
}