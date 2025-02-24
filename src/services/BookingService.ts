import { BookingInterface } from "../interfaces/BookingInterface";
import { ServiceInterface } from "../interfaces/ServiceInterface";
import { BookingModel } from "../models/BookingSchema";


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