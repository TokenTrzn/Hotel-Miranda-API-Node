import { Response, Request } from "express"
import { BookingInterface } from "../interfaces/BookingInterface"

export const validateContact = (req: Request, res: Response) => {
    const { id, guestName, orderDate, orderDateHour, checkIn, checkInHour, checkOut, checkOutHour, specialRequest, type, number, status, price, description, amenities, rooms } = req.body as BookingInterface
    
    if (typeof id !== 'string' || id === null) {
        return res.status(400).json({ error: 'Invalid Id' })
    } 
    if (typeof guestName !== 'string' || guestName === null) {
        return res.status(400).json({ error: 'Invalid Name' })
    }
    if (typeof orderDate !== 'string' || orderDate === null) {
        return res.status(400).json({ error: 'Invalid Date' })
    }
    if (typeof orderDateHour !== 'string' || orderDateHour === null) {
        return res.status(400).json({ error: 'Invalid Hour' })
    }
    if (typeof checkIn !== 'string' || checkIn === null) {
        return res.status(400).json({ error: 'Invalid Date' })
    }
    if (typeof checkInHour !== 'string' || checkInHour === null) {
        return res.status(400).json({ error: 'Invalid Hour' })
    }
    if (typeof checkOut !== 'string' || checkOut === null) {
        return res.status(400).json({ error: 'Invalid Date' })
    }
    if (typeof checkOutHour !== 'string' || checkOutHour === null) {
        return res.status(400).json({ error: 'Invalid Hour' })
    }
    if (typeof specialRequest !== 'boolean' || specialRequest === null) {
        return res.status(400).json({ error: 'Invalid Special Request' })
    }
    if (typeof type !== 'string' || type === null) {
        return res.status(400).json({ error: 'Invalid Type' })
    }
    if (typeof number !== 'number' || number === null) {
        return res.status(400).json({ error: 'Invalid Number' })
    }
    if (typeof status !== 'string' || status === null) {
        return res.status(400).json({ error: 'Invalid Status' })
    }
    if (typeof price !== 'string' || price === null) {
        return res.status(400).json({ error: 'Invalid Price' })
    }
    if (typeof description !== 'string' || description === null) {
        return res.status(400).json({ error: 'Invalid Description' })
    }
    if (typeof amenities !== 'string' || amenities === null) {
        return res.status(400).json({ error: 'Invalid Amenities' })
    }
    if (typeof rooms !== 'object' || rooms === null) {
        return res.status(400).json({ error: 'Invalid Rooms' })
    }
}