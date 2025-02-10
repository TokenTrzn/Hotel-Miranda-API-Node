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
 * /api/v1/rooms :
 *   get:
 *     summary: Obtiene una lista de rooms
 *     tags: [Rooms]
 *     responses:
 *       200:
 *         description: Lista de rooms
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
 *                     example: https://urlFoto.com
 *                   number:
 *                     type: integer
 *                     example: 45590             
 *                   name:
 *                     type: string
 *                     example: Alberto Gil 
 *                   type:
 *                     type: string
 *                     example: Double Bed
 *                   amenities:
 *                      type: string[]
 *                      example: ['Wifi', 'Mini Bar']
 *                   price: 
 *                      type: string
 *                      example: $116.34
 *                   offerPrice:
 *                      type: string
 *                      example: $98.65
 *                   status: 
 *                      type: string
 *                      example: Booked
 */

roomRouter.get(baseUrl, (req: Request, res: Response) => {
    const roomList = roomService.fetchAll()
    res.json(roomList)
})

roomRouter.get(baseUrl + '/:id', (req: Request, res: Response) => {
    const room = roomService.fetchById(parseInt(req.params.id))
    if (room) {
        res.json(room)
    } else {
        res.status(404).json({ message: 'Room not found' })
    }
})

roomRouter.post(baseUrl, (req: Request, res: Response) => {
    const newRoom = roomService.create(req.body)
    res.status(201).json(newRoom)
})

roomRouter.put(baseUrl + '/:id', (req: Request, res: Response) => {
    const updatedRoom = roomService.update(parseInt(req.params.id), req.body)
    if (updatedRoom !== null) {
        res.status(204).json(updatedRoom)
    } else {
        res.status(404).json({ message: 'Room not found' })
    }
})

roomRouter.delete(baseUrl + '/:id', (req: Request, res: Response) => {
    const deletedRoom = roomService.delete(parseInt(req.params.id));
    if (deletedRoom) {
        res.status(204).json({ message: 'Room deleted' });
    } else {
        res.status(404).json({ message: 'Room not found' });
    }
});