import { Request, Response, Router } from "express"
import { UserService } from "../services/UserService"

export const userRouter = Router()
const userService = new UserService()
const baseUrl = '/users'
/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Operaciones relacionadas con users
 */
/**
 * @swagger
 * /api/v1/users :
 *   get:
 *     summary: Obtiene una lista de users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de users
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
 *                   name:
 *                     type: string
 *                     example: "Alberto Gil"
 *                   email:
 *                     type: string
 *                     example: "alberto@gmail.com "
 *                   startDate:
 *                      type: string
 *                      example: "08/06/2025"
 *                   description: 
 *                      type: string
 *                      example: "Lorem ipsun"
 *                   contact:
 *                      type: string
 *                      example: "971.927-8764"
 *                   status:
 *                      type: string
 *                      example: "ACTIVE"
 *                   password: 
 *                      type: string
 *                      example: "password"
 */

userRouter.get(baseUrl, (req: Request, res: Response) => {
    const userList = userService.fetchAll()
    res.json(userList)
})

userRouter.get(baseUrl + '/:id', (req: Request, res: Response) => {
    const user = userService.fetchById(parseInt(req.params.id))
    if (user) {
        res.json(user)
    } else {
        res.status(404).json({ message: 'User not found' })
    }
})

userRouter.post(baseUrl, (req: Request, res: Response) => {
    const newUser = userService.create(req.body)
    res.status(201).json(newUser)
})

userRouter.put(baseUrl + '/:id', (req: Request, res: Response) => {
    const updatedUser = userService.update(parseInt(req.params.id), req.body)
    if (updatedUser !== null) {
        res.status(204).json(updatedUser)
    } else {
        res.status(404).json({ message: 'User not found' })
    }
})

userRouter.delete(baseUrl + '/:id', (req: Request, res: Response) => {
    const deletedUser = userService.delete(parseInt(req.params.id))
    if (deletedUser) {
        res.status(204).json({ message: 'User deleted' })
    } else {
        res.status(404).json({ message: 'User not found' })
    }
})