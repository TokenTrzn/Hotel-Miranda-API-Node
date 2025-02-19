import { Request, Response, Router } from "express"
import { BookingService } from "../services/BookingService"

export const bookingRouter = Router()
const bookingService = new BookingService()
const baseUrl = '/bookings'

/**
 * @swagger
 * tags:
 *  - name: Bookings
 *    description: Operaciones relacionadas con bookings
 */
/**
 *  @swagger
 * /bookings :
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
 *                      type: boolean
 *                      example: true
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

bookingRouter.get(baseUrl, async (req: Request, res: Response) => {
    const bookingList = await bookingService.fetchAll()
    res.json(bookingList)
})

/**
 *  @swagger
 * /bookings/:id :
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
 *                      type: boolean
 *                      example: true
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

bookingRouter.get(baseUrl + '/:id', async (req: Request, res: Response) => {
    const booking = await bookingService.fetchById(parseInt(req.params.id))
    if (booking !== null) {
        res.json(booking)
    } else {
        res.status(404).json({ message: 'Booking not found' })
    }
})

/**
 *  @swagger
 * /bookings/create :
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
 *                      type: boolean
 *                      example: true
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

bookingRouter.post(baseUrl, async (req: Request, res: Response) => {
    const newBooking = await bookingService.create(req.body)
    res.status(201).json(newBooking)
})

/**
 *  @swagger
 * /bookings/:id :
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
 *                      type: boolean
 *                      example: true
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

bookingRouter.put(baseUrl + '/:id', async (req: Request, res: Response) => {
    const updatedBooking = await bookingService.update(parseInt(req.params.id), req.body)
    if (updatedBooking !== null) {
        res.status(204).json(updatedBooking)
    } else {
        res.status(404).json({ message: 'Booking not found' })
    }
})

/**
 *  @swagger
 * /bookings/:id :
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
 *                      type: boolean
 *                      example: true
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

bookingRouter.delete(baseUrl + '/:id', async (req: Request, res: Response) => {
    const deletedBooking = await bookingService.delete(parseInt(req.params.id))
    if (deletedBooking) {
        res.status(204).json({ message: 'Booking deleted' })
    } else {
        res.status(404).json({ message: 'Booking not found' })
    }
})