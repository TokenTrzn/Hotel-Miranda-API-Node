import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import { loginRouter } from './controllers/LoginController'
import { authenticate } from './middleware/auth'
import { roomRouter } from './controllers/RoomController'
import { bookingRouter } from './controllers/BookingController'
import { contactRouter } from './controllers/ContactController'
import { userRouter } from './controllers/UserController'

const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())


const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
          title: 'Documentación de mi API',
          version: '1.0.0',
          description: 'Descripción de mi API',
        },
        servers: [
          {
            url: 'http://localhost:3000',
          },
        ]
      },
      apis: ['./src/controllers/*.ts']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)

app.use(loginRouter)
app.use(roomRouter)
app.use(bookingRouter)
app.use(contactRouter)
app.use(userRouter)

app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

app.get('/live', (req: Request, res: Response) => {
    res.send(`${new Date().toISOString()}`)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})