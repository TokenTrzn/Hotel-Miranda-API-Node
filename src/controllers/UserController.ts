import { Request, Response, Router } from "express"
import { createUser, deleteUser, getUserById, getUsers, updateUser, UserService } from "../services/UserService"

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
 * /users :
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

userRouter.get(baseUrl, async (req: Request, res: Response) => {
    const users = await getUsers()
    res.json(users)
    
    //const userList = await userService.fetchAll()
    //res.json(userList)
})

/**
 * @swagger
 * /users/:id :
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

userRouter.get(baseUrl + '/:id', async (req: Request, res: Response) => {
    const user = await getUserById(parseInt(req.params.id))
    res.json(user)
})

/**
 * @swagger
 * /users/create :
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

userRouter.post(baseUrl, async (req: Request, res: Response) => {
    const newUser = await createUser(req.body)
    res.json(newUser)
})

/**
 * @swagger
 * /users/:id :
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

userRouter.put(baseUrl + '/:id', async (req: Request, res: Response) => {
    const updatedUser = await updateUser(parseInt(req.params.id), req.body)
    res.json(updatedUser)
})

/**
 * @swagger
 * /users/:id :
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

userRouter.delete(baseUrl + '/:id', async (req: Request, res: Response) => {
    const deletedUser = await deleteUser(parseInt(req.params.id))
    res.json(deletedUser)
})