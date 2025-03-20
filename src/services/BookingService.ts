import { ResultSetHeader, RowDataPacket } from "mysql2";
import { BookingInterface } from "../interfaces/BookingInterface";
import { ServiceInterface } from "../interfaces/ServiceInterface";
import { BookingModel } from "../models/BookingSchema";
import { connectSql } from "../utils/database";

export const getBookings = async () => {
    const [rows] = await connectSql.query('SELECT * FROM bookings')
    return rows
}

export const getBookingById = async (id: number) => {
    const [booking] = await connectSql.query<RowDataPacket[]>('SELECT * FROM bookings WHERE id = ?', [id])
    return booking[0]
}

export const createbooking = async (booking: BookingInterface) => {
    const [result] = await connectSql.query<ResultSetHeader>(
        'INSERT INTO bookings (guestName, orderDate, orderDateHour, checkIn, checkInHour, checkOut, checkOutHour, specialRequest, type, number, status, price, description, amenities) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [booking.guestName, booking.orderDate, booking.orderDateHour, booking.checkIn, booking.checkInHour, booking.checkOut, booking.checkOutHour, booking.specialRequest, booking.type, booking.number, booking.status, booking.price, booking.description, booking.amenities]
    )
    return result
}

export const updatebooking = async (id: number, booking: BookingInterface) => {
    const [result] = await connectSql.query<ResultSetHeader>(
        'UPDATE bookings SET guestName = ?, orderDate = ?, orderDateHour = ?, checkIn = ?, checkInHour = ?, checkOut = ?, checkOutHour = ?, specialRequest = ?, type = ?, number = ?, status = ?, price = ?, description = ?, amenities WHERE id = ?',
        [booking.guestName, booking.orderDate, booking.orderDateHour, booking.checkIn, booking.checkInHour, booking.checkOut, booking.checkOutHour, booking.specialRequest, booking.type, booking.number, booking.status, booking.price, booking.description, booking.amenities, id]
    )
    return result
}

export const deletebooking = async (id: number) => {
    const [result] = await connectSql.query<ResultSetHeader>('DELETE FROM bookings WHERE id = ?', [id])
    return result
}

export class BookingService implements ServiceInterface<BookingInterface> {

    async fetchAll(): Promise<BookingInterface[]> {
        try {
            const bookings: BookingInterface[] = await BookingModel.find()
            return bookings
        } catch (error) {
            throw error
        }
    }

    async fetchById(id: string): Promise<BookingInterface> {
        try {
            const booking: BookingInterface | null = await BookingModel.findById(id)
            if (booking === null) {
                throw new Error('Booking Not Found')
            }
            return booking
        } catch (error) {
            throw error
        }
    }

    async create(booking: BookingInterface): Promise<BookingInterface> {
        const newBooking = new BookingModel(booking)
        await newBooking.save()
        return newBooking
    }

    async update(id: string, booking: BookingInterface): Promise<BookingInterface | null> {
        try {
            const updatedBooking: BookingInterface | null = await BookingModel.findByIdAndUpdate(
                { id: id },
                booking
            )
            if (updatedBooking === null) {
                return null
            }

            return updatedBooking
        } catch (error) {
            throw error
        }
    }

    async delete(id: string): Promise<boolean> {
        try {
            const deletedBooking = await BookingModel.findByIdAndDelete(id)
            if (deletedBooking === null) {
                throw new Error('Booking Not Found')
            }

            return true
        } catch (error) {
            throw error
        }
    }
}