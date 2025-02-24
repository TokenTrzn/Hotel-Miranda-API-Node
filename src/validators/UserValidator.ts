import { Response, Request } from "express"
import { UserInterface } from "../interfaces/UserInterface"

export const validateContact = (req: Request, res: Response) => {
    const { id, photo, name, email, startDate, description, contact, status } = req.body as UserInterface
    
    if (typeof id !== 'string' || id === null) {
        return res.status(400).json({ error: 'Invalid Id' })
    } 
    if (typeof photo !== 'string' || photo === null) {
        return res.status(400).json({ error: 'Invalid File' })
    }
    if (typeof name !== 'string' || name === null) {
        return res.status(400).json({ error: 'Invalid Name' })
    }
    if (typeof email !== 'string' || email === null) {
        return res.status(400).json({ error: 'Invalid Email' })
    }
    if (typeof startDate !== 'string' || startDate === null) {
        return res.status(400).json({ error: 'Invalid Date' })
    }
    if (typeof description !== 'string' || description === null) {
        return res.status(400).json({ error: 'Invalid Description' })
    }
    if (typeof contact !== 'boolean' || contact === null) {
        return res.status(400).json({ error: 'Invalid Contact' })
    }
    if (typeof status !== 'string' || status === null) {
        return res.status(400).json({ error: 'Invalid Status' })
    }
}