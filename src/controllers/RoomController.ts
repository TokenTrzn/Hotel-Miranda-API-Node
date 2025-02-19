import { Request, Response, Router } from "express"
import { RoomService } from "../services/RoomService"

export const roomRouter = Router()
const roomService = new RoomService()
const baseUrl = '/rooms'
/**
 * @swagger
 * tags:
 *   - name: Rooms
 *     description: Operaciones relacionadas con rooms
 */
/**
 * @swagger
 * /rooms :
 *   get:
 *     summary: Get all rooms
 *     tags: [Rooms]
 *     responses:
 *       200:
 *         description: Get all rooms
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
 *                   photo:
 *                     type: string
 *                     example: "https://urlFoto.com"
 *                   number:
 *                     type: number
 *                     example: 45590             
 *                   name:
 *                     type: string
 *                     example: "Alberto Gil "
 *                   type:
 *                     type: string
 *                     example: "Double Bed"
 *                   amenities:
 *                      type: string[]
 *                      example: ['Wifi', 'Mini Bar']
 *                   price: 
 *                      type: string
 *                      example: "$116.34"
 *                   offerPrice:
 *                      type: string
 *                      example: "$98.65"
 *                   status: 
 *                      type: string
 *                      example: "Booked"
 */

roomRouter.get(baseUrl, async (req: Request, res: Response) => {
    const roomList = await roomService.fetchAll()
    res.json(roomList)
})

/**
 * @swagger
 * /rooms/:id :
 *   get:
 *     summary: Get a room by Id
 *     tags: [Rooms]
 *     responses:
 *       200:
 *         description: Get a room by Id
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
 *                   photo:
 *                     type: string
 *                     example: "https://urlFoto.com"
 *                   number:
 *                     type: number
 *                     example: 45590             
 *                   name:
 *                     type: string
 *                     example: "Alberto Gil "
 *                   type:
 *                     type: string
 *                     example: "Double Bed"
 *                   amenities:
 *                      type: string[]
 *                      example: ['Wifi', 'Mini Bar']
 *                   price: 
 *                      type: string
 *                      example: "$116.34"
 *                   offerPrice:
 *                      type: string
 *                      example: "$98.65"
 *                   status: 
 *                      type: string
 *                      example: "Booked"
 */

roomRouter.get(baseUrl + '/:id', async (req: Request, res: Response) => {
    const room = await roomService.fetchById(parseInt(req.params.id))
    if (room !== null) {
        res.json(room)
    } else {
        res.status(404).json({ message: 'Room not found' })
    }
})

/**
 * @swagger
 * /rooms/create :
 *   post:
 *     summary: Crea una room
 *     tags: [Rooms]
 *     responses:
 *       200:
 *         description: Crea una room
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
 *                   photo:
 *                     type: string
 *                     example: "https://urlFoto.com"
 *                   number:
 *                     type: number
 *                     example: 45590             
 *                   name:
 *                     type: string
 *                     example: "Alberto Gil "
 *                   type:
 *                     type: string
 *                     example: "Double Bed"
 *                   amenities:
 *                      type: string[]
 *                      example: ['Wifi', 'Mini Bar']
 *                   price: 
 *                      type: string
 *                      example: "$116.34"
 *                   offerPrice:
 *                      type: string
 *                      example: "$98.65"
 *                   status: 
 *                      type: string
 *                      example: "Booked"
 */

roomRouter.post(baseUrl + '/create', async (req: Request, res: Response) => {
    const newRoom = await roomService.create(req.body)
    res.status(201).json(newRoom)
})

/**
 * @swagger
 * /rooms/:id :
 *   put:
 *     summary: Edit a room
 *     tags: [Rooms]
 *     responses:
 *       200:
 *         description: Edit a room
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
 *                   photo:
 *                     type: string
 *                     example: "https://urlFoto.com"
 *                   number:
 *                     type: integer
 *                     example: 45590             
 *                   name:
 *                     type: string
 *                     example: "Alberto Gil "
 *                   type:
 *                     type: string
 *                     example: "Double Bed"
 *                   amenities:
 *                      type: string[]
 *                      example: ['Wifi', 'Mini Bar']
 *                   price: 
 *                      type: string
 *                      example: "$116.34"
 *                   offerPrice:
 *                      type: string
 *                      example: "$98.65"
 *                   status: 
 *                      type: string
 *                      example: "Booked"
 */

roomRouter.put(baseUrl + '/:id', async (req: Request, res: Response) => {
    const updatedRoom = await roomService.update(parseInt(req.params.id), req.body)
    if (updatedRoom !== null) {
        res.status(204).json(updatedRoom)
    } else {
        res.status(404).json({ message: 'Room not found' })
    }
})

/**
 * @swagger
 * /rooms/:id :
 *   delete:
 *     summary: Delete a room
 *     tags: [Rooms]
 *     responses:
 *       200:
 *         description: Delete a room
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
 *                   photo:
 *                     type: string
 *                     example: "https://urlFoto.com"
 *                   number:
 *                     type: integer
 *                     example: 45590             
 *                   name:
 *                     type: string
 *                     example: "Alberto Gil "
 *                   type:
 *                     type: string
 *                     example: "Double Bed"
 *                   amenities:
 *                      type: string[]
 *                      example: ['Wifi', 'Mini Bar']
 *                   price: 
 *                      type: string
 *                      example: "$116.34"
 *                   offerPrice:
 *                      type: string
 *                      example: "$98.65"
 *                   status: 
 *                      type: string
 *                      example: "Booked"
 */

roomRouter.delete(baseUrl + '/:id', async (req: Request, res: Response) => {
    const deletedRoom = await roomService.delete(parseInt(req.params.id))
    if (deletedRoom) {
        res.status(204).json({ message: 'Room deleted' })
    } else {
        res.status(404).json({ message: 'Room not found' })
    }
})