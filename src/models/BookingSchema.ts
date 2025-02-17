import mongoose from "mongoose";
import { BookingInterface } from "../interfaces/BookingInterface";


const BookingSchema = new mongoose.Schema<BookingInterface>({
    guestName: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    orderDate: {
        type: String,
        required: true
    },
    orderDateHour: {
        type: String,
        required: true
    },
    checkIn: {
        type: String,
        required: true
    },
    checkInHour: {
        type: String,
        required: true
    },
    checkOut: {
        type: String,
        required: true
    },
    checkOutHour: {
        type: String,
        required: true
    },
    specialRequest: {
        type: Boolean,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['Check In', 'Check Out', 'In Progress']
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    amenities: {
        type: [String],
        required: true
    },
})

export const BookingModel = mongoose.model<BookingInterface>('Booking', BookingSchema)