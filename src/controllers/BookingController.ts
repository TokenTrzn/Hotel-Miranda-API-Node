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
 * /api/v1/bookings :
 *   get:
 *     summary: Obtiene una lista de bookings
 *     tags: [Bookings]
 *     responses:
 *       200:
 *         description: Lista de bookings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
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
 *                      type: integer
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

bookingRouter.get(baseUrl, (req: Request, res: Response) => {
    const bookingList = bookingService.fetchAll()
    res.json(bookingList)
})

bookingRouter.get(baseUrl + '/:id', (req: Request, res: Response) => {
    const booking = bookingService.fetchById(parseInt(req.params.id))
    if (booking) {
        res.json(booking)
    } else {
        res.status(404).json({ message: 'Booking not found' })
    }
})

bookingRouter.post(baseUrl, (req: Request, res: Response) => {
    const newBooking = bookingService.create(req.body)
    res.status(201).json(newBooking)
})

bookingRouter.put(baseUrl + '/:id', (req: Request, res: Response) => {
    const updatedBooking = bookingService.update(parseInt(req.params.id), req.body)
    if (updatedBooking !== null) {
        res.status(204).json(updatedBooking)
    } else {
        res.status(404).json({ message: 'Booking not found' })
    }
})

bookingRouter.delete(baseUrl + '/:id', (req: Request, res: Response) => {
    const deletedBooking = bookingService.delete(parseInt(req.params.id))
    if (deletedBooking) {
        res.status(204).json({ message: 'Booking deleted' })
    } else {
        res.status(404).json({ message: 'Booking not found' })
    }
})