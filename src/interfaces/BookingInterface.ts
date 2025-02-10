export interface BookingInterface {
    id: number;
    guestName: string;
    orderDate: string;
    orderDateHour: string;
    checkIn: string;
    checkInHour: string;
    checkOut: string;
    checkOutHour: string;
    specialRequest: 'true' | 'false';
    type: string;
    number: number;
    status: 'Check In' | 'Check Out' | 'In Progress';
    price: string;
    description: string;
    amenities: string[];
}