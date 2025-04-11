import { Request, Response, Router } from "express";
import { ContactService } from "../services/ContactService";

export const contactRouter = Router()
const contactService = new ContactService()

/**
 * @swagger
 * tags:
 *  - name: Contacts
 *    description: Operaciones relacionadas con contacts
 */
/**
 * @swagger
 * /api/v1/contacts:
 *   get:
 *     summary: Get all contacts
 *     tags: [Contacts]
 *     responses:
 *       200:
 *         description: Get all contacts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                      type: number
 *                      example: 1 
 *                   date:
 *                      type: string
 *                      example: "08/30/2024"
 *                   hour:
 *                      type: string
 *                      example: "5:18 PM"
 *                   name:
 *                      type: string
 *                      example: "Alberto Gil"
 *                   email:
 *                      type: string
 *                      example: "alberto@gmail.com"
 *                   phone:
 *                      type: string
 *                      example: "593-825-5086"
 *                   comment:
 *                      type: string
 *                      example: "Lorem ipsun"
 *                   isArchived:
 *                      type: boolean
 *                      example: true              
 */

contactRouter.get('/api/v1/contacts', async (req: Request, res: Response) => {
    const contactList = await contactService.fetchAll()
    res.json(contactList)
})

/**
 * @swagger
 * /api/v1/contacts/:id :
 *   get:
 *     summary: Get a contact by Id
 *     tags: [Contacts]
 *     responses:
 *       200:
 *         description: Get contact by Id
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                      type: number
 *                      example: 1 
 *                   date:
 *                      type: string
 *                      example: "08/30/2024"
 *                   hour:
 *                      type: string
 *                      example: "5:18 PM"
 *                   name:
 *                      type: string
 *                      example: "Alberto Gil"
 *                   email:
 *                      type: string
 *                      example: "alberto@gmail.com"
 *                   phone:
 *                      type: string
 *                      example: "593-825-5086"
 *                   comment:
 *                      type: string
 *                      example: "Lorem ipsun"
 *                   isArchived:
 *                      type: boolean
 *                      example: true              
 */

contactRouter.get('/api/v1/contacts/:id', async (req: Request, res: Response) => {
    const contact = await contactService.fetchById(req.params.id)
    if (contact !== null) {
        res.json(contact)
    } else {
        res.status(404).json({ message: 'Contact not found' })
    }
})

/**
 * @swagger
 * /api/v1/contacts :
 *   post:
 *     summary: Create a contact
 *     tags: [Contacts]
 *     responses:
 *       200:
 *         description: Create a contact
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                      type: number
 *                      example: 1 
 *                   date:
 *                      type: string
 *                      example: "08/30/2024"
 *                   hour:
 *                      type: string
 *                      example: "5:18 PM"
 *                   name:
 *                      type: string
 *                      example: "Alberto Gil"
 *                   email:
 *                      type: string
 *                      example: "alberto@gmail.com"
 *                   phone:
 *                      type: string
 *                      example: "593-825-5086"
 *                   comment:
 *                      type: string
 *                      example: "Lorem ipsun"
 *                   isArchived:
 *                      type: boolean
 *                      example: true              
 */

contactRouter.post('/api/v1/contacts', async (req: Request, res: Response) => {
    const newContact = await contactService.create(req.body)
    res.status(201).json(newContact)
})

/**
 * @swagger
 * /api/v1/contacts/:id :
 *   put:
 *     summary: Edit a contact
 *     tags: [Contacts]
 *     responses:
 *       200:
 *         description: Edit a contact
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                      type: number
 *                      example: 1 
 *                   date:
 *                      type: string
 *                      example: "08/30/2024"
 *                   hour:
 *                      type: string
 *                      example: "5:18 PM"
 *                   name:
 *                      type: string
 *                      example: "Alberto Gil"
 *                   email:
 *                      type: string
 *                      example: "alberto@gmail.com"
 *                   phone:
 *                      type: string
 *                      example: "593-825-5086"
 *                   comment:
 *                      type: string
 *                      example: "Lorem ipsun"
 *                   isArchived:
 *                      type: boolean
 *                      example: true              
 */

contactRouter.put('/api/v1/contacts/:id', async (req: Request, res: Response) => {
    const updateContact = await contactService.update(req.params.id, req.body)
    if (updateContact !== null) {
        res.status(204).json(updateContact)
    } else {
        res.status(404).json({ message: 'Contact not found' })
    }
})

/**
 * @swagger
 * /api/v1/contacts/:id :
 *   delete:
 *     summary: Delete a contact
 *     tags: [Contacts]
 *     responses:
 *       200:
 *         description: Delete a contact
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                      type: number
 *                      example: 1 
 *                   date:
 *                      type: string
 *                      example: "08/30/2024"
 *                   hour:
 *                      type: string
 *                      example: "5:18 PM"
 *                   name:
 *                      type: string
 *                      example: "Alberto Gil"
 *                   email:
 *                      type: string
 *                      example: "alberto@gmail.com"
 *                   phone:
 *                      type: string
 *                      example: "593-825-5086"
 *                   comment:
 *                      type: string
 *                      example: "Lorem ipsun"
 *                   isArchived:
 *                      type: boolean
 *                      example: true              
 */

contactRouter.delete('/api/v1/contacts/:id', async (req: Request, res: Response) => {
    const deletedContact = await contactService.delete(req.params.id)
    if (deletedContact !== null) {
        res.status(204).json({ message: 'Contact deleted' })
    } else {
        res.status(404).json({ message: 'Contact not found' })
    }
})