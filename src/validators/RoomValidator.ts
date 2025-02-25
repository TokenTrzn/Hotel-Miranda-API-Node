import { Response, Request } from "express"
import { RoomInterface } from "../interfaces/RoomInterface"

export const validateContact = (req: Request, res: Response) => {
    const { photo, number, name, type, amenities, price, offerPrice, status, bookings } = req.body as RoomInterface
    
    if (typeof photo !== 'string' || photo === null) {
        return res.status(400).json({ error: 'Invalid File' })
    }
    if (typeof number !== 'number' || number === null) {
        return res.status(400).json({ error: 'Invalid Number' })
    }
    if (typeof name !== 'string' || name === null) {
        return res.status(400).json({ error: 'Invalid Name' })
    }
    if (typeof type !== 'string' || type === null) {
        return res.status(400).json({ error: 'Invalid Type' })
    }
    if (typeof amenities !== 'string' || amenities === null) {
        return res.status(400).json({ error: 'Invalid Amenities' })
    }
    if (typeof price !== 'string' || price === null) {
        return res.status(400).json({ error: 'Invalid Price' })
    }
    if (typeof offerPrice !== 'boolean' || offerPrice === null) {
        return res.status(400).json({ error: 'Invalid Offer Price' })
    }
    if (typeof status !== 'string' || status === null) {
        return res.status(400).json({ error: 'Invalid Status' })
    }
    if (typeof bookings !== 'object' || bookings === null) {
        return res.status(400).json({ error: 'Invalid Bookings' })
    }
}