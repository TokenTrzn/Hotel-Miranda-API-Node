import { Request, Response, Router } from "express"
import { BookingService } from "../services/BookingService"
import { RoomService } from "../services/RoomService"
import { authenticate } from "../middleware/auth"

export const bookingRouter = Router()
const bookingService = new BookingService()
const roomService = new RoomService()

/**
 * @swagger
 * tags:
 *  - name: Bookings
 *    description: Operaciones relacionadas con bookings
 */
/**
 *  @swagger
 * /api/v1/bookings:
 *   get:
 *     summary: Get all bookings
 *     tags: [Bookings]
 *     responses:
 *       200:
 *         description: Get all bookings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                     example: 1
 *                   guestName:
 *                     type: string
 *                     example: "https://urlFoto.com"
 *                   orderDate:
 *                     type: string
 *                     example: "07/30/2042"
 *                   orderDateHour:
 *                     type: string
 *                     example: "6:53 PM"
 *                   checkIn:
 *                     type: string
 *                     example: "10/16/2029"
 *                   checkInHour:
 *                      type: string
 *                      example: "7:45 AM"
 *                   checkOut: 
 *                      type: string
 *                      example: "10/16/2029"
 *                   checkOutHour:
 *                      type: string
 *                      example: "7:45 PM"
 *                   specialRequest: 
 *                      type: string
 *                      example: "true"
 *                   type:
 *                      type: string
 *                      example: "Premium A"
 *                   number:
 *                      type: number
 *                      example: 5643
 *                   status:
 *                      type: string
 *                      example: "Check In"
 *                   price:
 *                      type: string
 *                      example: "$101.97"
 *                   description:
 *                      type: string
 *                      example: "Lorem ipsum"
 *                   amenities: 
 *                      type: string[]
 *                      example: ['Wifi', 'Mini Bar']
 */

bookingRouter.get('/api/v1/bookings', (req: Request, res: Response) => {
    const bookingList = bookingService.fetchAll()
    res.json(bookingList)
})

/**
 *  @swagger
 * /api/v1/bookings/:id:
 *   get:
 *     summary: Get a booking by Id
 *     tags: [Bookings]
 *     responses:
 *       200:
 *         description: Get a booking by Id
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                     example: 1
 *                   guestName:
 *                     type: string
 *                     example: "https://urlFoto.com"
 *                   orderDate:
 *                     type: string
 *                     example: "07/30/2042"
 *                   orderDateHour:
 *                     type: string
 *                     example: "6:53 PM"
 *                   checkIn:
 *                     type: string
 *                     example: "10/16/2029"
 *                   checkInHour:
 *                      type: string
 *                      example: "7:45 AM"
 *                   checkOut: 
 *                      type: string
 *                      example: "10/16/2029"
 *                   checkOutHour:
 *                      type: string
 *                      example: "7:45 PM"
 *                   specialRequest: 
 *                      type: string
 *                      example: "true"
 *                   type:
 *                      type: string
 *                      example: "Premium A"
 *                   number:
 *                      type: number
 *                      example: 5643
 *                   status:
 *                      type: string
 *                      example: "Check In"
 *                   price:
 *                      type: string
 *                      example: "$101.97"
 *                   description:
 *                      type: string
 *                      example: "Lorem ipsum"
 *                   amenities: 
 *                      type: string[]
 *                      example: ['Wifi', 'Mini Bar']
 */

bookingRouter.get('/api/v1/bookings/:id', (req: Request, res: Response) => {
    const booking = bookingService.fetchById(parseInt(req.params.id))
    if (booking !== null) {
        res.json(booking)
    } else {
        res.status(404).json({ message: 'Booking not found' })
    }
})

/**
 *  @swagger
 * /api/v1/bookings:
 *   post:
 *     summary: Create a booking
 *     tags: [Bookings]
 *     responses:
 *       200:
 *         description: Create a booking
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                     example: 1
 *                   guestName:
 *                     type: string
 *                     example: "https://urlFoto.com"
 *                   orderDate:
 *                     type: string
 *                     example: "07/30/2042"
 *                   orderDateHour:
 *                     type: string
 *                     example: "6:53 PM"
 *                   checkIn:
 *                     type: string
 *                     example: "10/16/2029"
 *                   checkInHour:
 *                      type: string
 *                      example: "7:45 AM"
 *                   checkOut: 
 *                      type: string
 *                      example: "10/16/2029"
 *                   checkOutHour:
 *                      type: string
 *                      example: "7:45 PM"
 *                   specialRequest: 
 *                      type: string
 *                      example: "true"
 *                   type:
 *                      type: string
 *                      example: "Premium A"
 *                   number:
 *                      type: number
 *                      example: 5643
 *                   status:
 *                      type: string
 *                      example: "Check In"
 *                   price:
 *                      type: string
 *                      example: "$101.97"
 *                   description:
 *                      type: string
 *                      example: "Lorem ipsum"
 *                   amenities: 
 *                      type: string[]
 *                      example: ['Wifi', 'Mini Bar']
 */

bookingRouter.post('/api/v1/bookings', (req: Request, res: Response) => {
    const newBooking = bookingService.create(req.body)
    res.status(201).json(newBooking)
})

/**
 *  @swagger
 * /api/v1/bookings/:id:
 *   put:
 *     summary: Edit a booking
 *     tags: [Bookings]
 *     responses:
 *       200:
 *         description: Edit a booking
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                     example: 1
 *                   guestName:
 *                     type: string
 *                     example: "https://urlFoto.com"
 *                   orderDate:
 *                     type: string
 *                     example: "07/30/2042"
 *                   orderDateHour:
 *                     type: string
 *                     example: "6:53 PM"
 *                   checkIn:
 *                     type: string
 *                     example: "10/16/2029"
 *                   checkInHour:
 *                      type: string
 *                      example: "7:45 AM"
 *                   checkOut: 
 *                      type: string
 *                      example: "10/16/2029"
 *                   checkOutHour:
 *                      type: string
 *                      example: "7:45 PM"
 *                   specialRequest: 
 *                      type: string
 *                      example: "true"
 *                   type:
 *                      type: string
 *                      example: "Premium A"
 *                   number:
 *                      type: number
 *                      example: 5643
 *                   status:
 *                      type: string
 *                      example: "Check In"
 *                   price:
 *                      type: string
 *                      example: "$101.97"
 *                   description:
 *                      type: string
 *                      example: "Lorem ipsum"
 *                   amenities: 
 *                      type: string[]
 *                      example: ['Wifi', 'Mini Bar']
 */

bookingRouter.put('/api/v1/bookings/:id', (req: Request, res: Response) => {
    const updatedBooking = bookingService.update(parseInt(req.params.id), req.body)
    if (updatedBooking !== null) {
        res.status(204).json(updatedBooking)
    } else {
        res.status(404).json({ message: 'Booking not found' })
    }
})

/**
 *  @swagger
 * /api/v1/bookings/:id :
 *   delete:
 *     summary: Delete a booking
 *     tags: [Bookings]
 *     responses:
 *       200:
 *         description: Delete a booking
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                     example: 1
 *                   guestName:
 *                     type: string
 *                     example: "https://urlFoto.com"
 *                   orderDate:
 *                     type: string
 *                     example: "07/30/2042"
 *                   orderDateHour:
 *                     type: string
 *                     example: "6:53 PM"
 *                   checkIn:
 *                     type: string
 *                     example: "10/16/2029"
 *                   checkInHour:
 *                      type: string
 *                      example: "7:45 AM"
 *                   checkOut: 
 *                      type: string
 *                      example: "10/16/2029"
 *                   checkOutHour:
 *                      type: string
 *                      example: "7:45 PM"
 *                   specialRequest: 
 *                      type: string
 *                      example: "true"
 *                   type:
 *                      type: string
 *                      example: "Premium A"
 *                   number:
 *                      type: number
 *                      example: 5643
 *                   status:
 *                      type: string
 *                      example: "Check In"
 *                   price:
 *                      type: string
 *                      example: "$101.97"
 *                   description:
 *                      type: string
 *                      example: "Lorem ipsum"
 *                   amenities: 
 *                      type: string[]
 *                      example: ['Wifi', 'Mini Bar']
 */

bookingRouter.delete('/api/v1/bookings/:id', (req: Request, res: Response) => {
    const deletedBooking = bookingService.delete(parseInt(req.params.id))
    if (deletedBooking) {
        res.status(204).json({ message: 'Booking deleted' })
    } else {
        res.status(404).json({ message: 'Booking not found' })
    }
})