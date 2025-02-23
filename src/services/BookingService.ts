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

    async update(id: number, booking: BookingInterface): Promise<BookingInterface | null> {
        try {
            const bookingToUpdate: BookingInterface | null = await BookingModel.findById(id)
            if (bookingToUpdate === null) {
                throw new Error('Booking Not Found')
            }
            const bookingObj = bookingToUpdate.toObject()
            const updatedBooking = { ...bookingObj, ...booking }
            await BookingModel.findByIdAndUpdate(id, updatedBooking)

            return updatedBooking
        } catch (error) {
            throw error
        }
    }

    async delete(id: number): Promise<boolean> {
        try {
            const bookingToDelete = await BookingModel.findById(id)
            if (bookingToDelete === null) {
                throw new Error('Booking Not Found')
            }
            await BookingModel.findByIdAndDelete(id)
            return true
        } catch (error) {
            throw error
        }
    }
}