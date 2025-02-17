import { Request, Response, Router } from "express"
import { UserService } from "../services/UserService"

export const userRouter = Router()
const userService = new UserService()

/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Operaciones relacionadas con users
 */
/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Get all users
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

userRouter.get('/api/v1/users', (req: Request, res: Response) => {
    const userList = userService.fetchAll()
    res.json(userList)
})

/**
 * @swagger
 * /api/v1/users/:id
 *   get:
 *     summary: Get a user by Id
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Get a user by Id
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
 *                     type: string
 *                     example: "08/06/2025"
 *                   description: 
 *                     type: string
 *                     example: "Lorem ipsun"
 *                   contact:
 *                     type: string
 *                     example: "971.927-8764"
 *                   status:
 *                     type: string
 *                     example: "ACTIVE"
 *                   password: 
 *                     type: string
 *                     example: "password"
 */

userRouter.get('/api/v1/users/:id', (req: Request, res: Response) => {
    const user = userService.fetchById(parseInt(req.params.id))
    if (user !== null) {
        res.json(user)
    } else {
        res.status(404).json({ message: 'User not found' })
    }
})

/**
 * @swagger
 * /api/v1/users
 *   post:
 *     summary: Create a user
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Create a user
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
 *                     type: string
 *                     example: "08/06/2025"
 *                   description: 
 *                     type: string
 *                     example: "Lorem ipsun"
 *                   contact:
 *                     type: string
 *                     example: "971.927-8764"
 *                   status:
 *                     type: string
 *                     example: "ACTIVE"
 *                   password: 
 *                     type: string
 *                     example: "password"
 */

userRouter.post('/api/v1/users', (req: Request, res: Response) => {
    const newUser = userService.create(req.body)
    res.status(201).json(newUser)
})

/**
 * @swagger
 * /api/v1/users/:id
 *   put:
 *     summary: Edit a user
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Edit a user
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
 *                     type: string
 *                     example: "08/06/2025"
 *                   description: 
 *                     type: string
 *                     example: "Lorem ipsun"
 *                   contact:
 *                     type: string
 *                     example: "971.927-8764"
 *                   status:
 *                     type: string
 *                     example: "ACTIVE"
 *                   password: 
 *                     type: string
 *                     example: "password"
 */

userRouter.put('/api/v1/users/:id', (req: Request, res: Response) => {
    const updatedUser = userService.update(parseInt(req.params.id), req.body)
    if (updatedUser !== null) {
        res.status(204).json(updatedUser)
    } else {
        res.status(404).json({ message: 'User not found' })
    }
})

/**
 * @swagger
 * /api/v1/users/:id
 *   delete:
 *     summary: Delete a user
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Delete a user
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
 *                     type: string
 *                     example: "08/06/2025"
 *                   description: 
 *                     type: string
 *                     example: "Lorem ipsun"
 *                   contact:
 *                     type: string
 *                     example: "971.927-8764"
 *                   status:
 *                     type: string
 *                     example: "ACTIVE"
 *                   password: 
 *                     type: string
 *                     example: "password"
 */

userRouter.delete('/api/v1/users/:id', (req: Request, res: Response) => {
    const deletedUser = userService.delete(parseInt(req.params.id))
    if (deletedUser) {
        res.status(204).json({ message: 'User deleted' })
    } else {
        res.status(404).json({ message: 'User not found' })
    }
})