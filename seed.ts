import { faker } from '@faker-js/faker'
import { connectSql } from './src/utils/database'
import { hashPassword } from './src/utils/hashPassword'
import 'dotenv/config'
import { RoomInterface } from './src/interfaces/RoomInterface'
import { BookingInterface } from './src/interfaces/BookingInterface'

async function main() {

    const connection = await connectSql.getConnection()
    console.log('Conectado a la DB')
    connection.release()

    async function generateContacts() {
        const date = faker.date.anytime()
        const hour = faker.date.anytime().toLocaleTimeString()
        const name = faker.person.fullName()
        const email = faker.internet.email()
        const phone = faker.phone.number({ style: 'national' })
        const comment = faker.lorem.paragraph()
        const isArchived = faker.datatype.boolean()

        await connectSql.execute(
            'INSERT INTO contacts (date, hour, name, email, phone, comment, isArchived) VALUES (?, ?, ?, ?, ?, ?, ?)', 
            [date, hour, name, email, phone, comment, isArchived]
        )        
    }

    async function generateUsers() {
        const photo = faker.system.fileName()
        const name = faker.person.fullName()
        const email = faker.internet.email()
        const startDate = faker.date.anytime()
        const description = faker.person.jobTitle()
        const contact = faker.phone.number()
        const status = faker.helpers.arrayElement(['ACTIVE', 'INACTIVE'])
        const password = await hashPassword(faker.internet.password())

        await connectSql.execute(
            'INSERT INTO users (photo, name, email, startDate, description, contact, status, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
            [photo, name, email, startDate, description, contact, status, password]
        )
    }

    async function generateBookings() {
        const guestName = faker.person.fullName()
        const orderDate = faker.date.anytime()
        const orderDateHour = faker.date.anytime().toLocaleTimeString()
        const checkIn = faker.date.anytime()
        const checkInHour = faker.date.anytime().toLocaleTimeString()
        const checkOut = faker.date.anytime()
        const checkOutHour = faker.date.anytime().toLocaleTimeString()
        const specialRequest = faker.datatype.boolean()
        const type = faker.helpers.arrayElement(['Standard A', 'Premium A', 'Standard B', 'Premium B'])
        const number = faker.number.int({ min: 1, max: 9999 })
        const status = faker.helpers.arrayElement(['Check In', 'Check Out', 'In Progress'])
        const price = faker.commerce.price({ min: 80, max: 200 })
        const description = faker.lorem.paragraph()
        const amenities = faker.helpers.arrayElements([
            'FREE WIFI',
            'TV LED',
            '2 BATHROOM',
            'AC',
            '3 BED SPACE',
            'COFEE SET',
            'BATHUP',
            'TOWEL',
            'SHOWER',
        ], { min: 3, max: 6 })

        await connectSql.execute(
            'INSERT INTO bookings (guestName, orderDate, orderDateHour, checkIn, checkInHour, checkOut, checkOutHour, specialRequest, type, number, status, price, description, amenities) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
            [guestName, orderDate, orderDateHour, checkIn, checkInHour, checkOut, checkOutHour, specialRequest, type, number, status, price, description, amenities]
        )
    }

    async function generateRooms() {
        const rooms: RoomInterface[] = []
        const bookings: BookingInterface[] = []

        const photo = faker.system.fileName()
        const number = faker.number.int({ min: 1, max: 9999 })
        const name = faker.helpers.arrayElement(['Deluxe S', 'Deluxe A', 'VIP S', 'VIP A'])
        const type = faker.helpers.arrayElement(['King Bed', 'Queen Bed', 'Double Bed'])
        const amenities = faker.helpers.arrayElements([
            'FREE WIFI',
            'TV LED',
            '2 BATHROOM',
            'AC',
            '3 BED SPACE',
            'COFEE SET',
            'BATHUP',
            'TOWEL',
            'SHOWER',
        ], { min: 3, max: 6 })
        const price = faker.commerce.price({ min: 150, max: 200 })
        const offerPrice = faker.commerce.price({ min: 100, max: 149 })
        const status = faker.helpers.arrayElement(['Available', 'Booked'])

        await connectSql.execute(
            'INSERT INTO rooms (photo, number, name, type, amenities, price, offerPrice, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
            [photo, number, name, type, amenities, price, offerPrice, status]
        )
    }    

    for (let i = 0; i < 10; i++) {
        await generateContacts()
        await generateBookings();
        await generateRooms()
        await generateUsers()
    }
}

main()