import { Response, Request } from "express"
import { ContactInterface } from "../interfaces/ContactInterface"

export const validateContact = (req: Request, res: Response) => {
    const { date, hour, name, email, phone, comment, isArchived } = req.body as ContactInterface
    
    if (typeof date !== 'string' || date === null) {
        return res.status(400).json({ error: 'Invalid Date' })
    }
    if (typeof hour !== 'string' || date === null) {
        return res.status(400).json({ error: 'Invalid Hour' })
    }
    if (typeof name !== 'string' || name === null) {
        return res.status(400).json({ error: 'Invalid Name' })
    }
    if (typeof email !== 'string' || email === null) {
        return res.status(400).json({ error: 'Invalid Email' })
    }
    if (typeof phone !== 'string' || phone === null) {
        return res.status(400).json({ error: 'Invalid Phone' })
    }
    if (typeof comment !== 'string' || comment === null) {
        return res.status(400).json({ error: 'Invalid Comment' })
    }
    if (typeof isArchived !== 'boolean' || isArchived === null) {
        return res.status(400).json({ error: 'Invalid Archived' })
    }
}