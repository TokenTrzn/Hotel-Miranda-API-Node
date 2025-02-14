import { Request, Response, Router } from "express";
import { ContactService } from "../services/ContactService";

export const contactRouter = Router()
const contactService = new ContactService()
const baseUrl = '/contacts'
/**
 * @swagger
 * tags:
 *  - name: Contacts
 *    description: Operaciones relacionadas con contacts
 */
/**
 * @swagger
 * /contacts:
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

contactRouter.get(baseUrl, (req: Request, res: Response) => {
    const contactList = contactService.fetchAll()
    res.json(contactList)
})

/**
 * @swagger
 * /contacts/:id :
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

contactRouter.get(baseUrl + '/:id', (req: Request, res: Response) => {
    const contact = contactService.fetchById(parseInt(req.params.id))
    if (contact !== null) {
        res.json(contact)
    } else {
        res.status(404).json({ message: 'Contact not found' })
    }
})

/**
 * @swagger
 * /contacts/create :
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

contactRouter.post(baseUrl, (req: Request, res: Response) => {
    const newContact = contactService.create(req.body)
    res.status(201).json(newContact)
})

/**
 * @swagger
 * /contacts/:id :
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

contactRouter.put(baseUrl + '/:id', (req: Request, res: Response) => {
    const updateContact = contactService.update(parseInt(req.params.id), req.body)
    if (updateContact !== null) {
        res.status(204).json(updateContact)
    } else {
        res.status(404).json({ message: 'Contact not found' })
    }
})

/**
 * @swagger
 * /contacts/:id :
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

contactRouter.delete(baseUrl + '/:id', (req: Request, res: Response) => {
    const deletedContact = contactService.delete(parseInt(req.params.id))
    if (deletedContact) {
        res.status(204).json({ message: 'Contact deleted' })
    } else {
        res.status(404).json({ message: 'Contact not found' })
    }
})