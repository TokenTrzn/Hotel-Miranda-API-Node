import { BookingInterface } from "../interfaces/BookingInterface";
import bookingsData from '../data/bookingsData.json'
import { ServiceInterface } from "../interfaces/ServiceInterface";
import { BookingModel } from "../models/BookingSchema";


export class BookingService implements ServiceInterface<BookingInterface> {
    private bookings: BookingInterface[] = bookingsData as BookingInterface[]

    async fetchAll(): Promise<BookingInterface[]> {
        try {
            const bookings: BookingInterface[] = await BookingModel.find()
            return bookings
        } catch (error) {
            throw error
        }
    }

    async fetchById(id: number): Promise<BookingInterface> {
        try {
            const booking: BookingInterface | null = await BookingModel.findById(id)
            if (!booking) {
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

    update(id: number, booking: BookingInterface): Promise<BookingInterface | null> {
        return Promise.resolve(null)
    }

    delete(id: number): Promise<boolean> {
        return Promise.resolve(false)
    }
}