import { Request, Response, Router } from "express";
import { ContactService, createContact, deleteContact, getContactById, getContacts, updateContact } from "../services/ContactService";

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

contactRouter.get(baseUrl, async (req: Request, res: Response) => {
    const contacts = await getContacts() 
    res.json(contacts)
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

contactRouter.get(baseUrl + '/:id', async (req: Request, res: Response) => {
    const contact = await getContactById(parseInt(req.params.id))
    res.json(contact)
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

contactRouter.post(baseUrl, async (req: Request, res: Response) => {
    const newContact = await createContact(req.body)
    res.json(newContact)
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

contactRouter.put(baseUrl + '/:id', async (req: Request, res: Response) => {
    const updatedContact = await updateContact(parseInt(req.params.id), req.body)
    res.json(updatedContact)
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

contactRouter.delete(baseUrl + '/:id', async (req: Request, res: Response) => {
    const deletedContact = await deleteContact(parseInt(req.params.id))
    res.json(deletedContact)
})