import { RoomInterface } from "./RoomInterface";

export interface BookingInterface {
    id: string;
    guestName: string;
    orderDate: string;
    orderDateHour: string;
    checkIn: string;
    checkInHour: string;
    checkOut: string;
    checkOutHour: string;
    specialRequest: boolean;
    type: string;
    number: number;
    status: 'Check In' | 'Check Out' | 'In Progress';
    price: string;
    description: string;
    amenities: string[];
    rooms: RoomInterface[]
}