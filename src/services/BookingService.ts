import { BookingInterface } from "../interfaces/BookingInterface";
import bookingsData from '../data/bookingsData.json'
import { ServiceInterface } from "../interfaces/ServiceInterface";


export class BookingService implements ServiceInterface<BookingInterface> {
    private bookings: BookingInterface[] = bookingsData as BookingInterface[]

    fetchAll(): BookingInterface[] {
        return this.bookings
    }

    fetchById(id: number): BookingInterface | undefined {
        return this. bookings.find((booking) => booking.id === id)
    }

    create(booking: BookingInterface): BookingInterface {
        const newBooking = { ...booking, id: this.bookings.length + 1 }
        this.bookings.push(newBooking)
        return newBooking
    }

    update(id: number, booking: BookingInterface): BookingInterface | null {
        const bookingToUpdate = this.bookings.filter((booking) => booking.id === id)
        if (bookingToUpdate.length > 0) {
            const updateBooking = { ...bookingToUpdate[0], ...booking }
            const result = this.bookings.filter((booking) => booking.id === id)
            result.push(updateBooking)
            this.bookings = result
            return updateBooking
        }
        return null
    }

    delete(id: number): boolean {
        const bookingToDelete = this.bookings.filter((booking) => booking.id === id)
        if (bookingToDelete.length > 0) {
            this.bookings = this.bookings.filter((booking) => booking.id !== id)
            return true
        }
        return false
    }
}