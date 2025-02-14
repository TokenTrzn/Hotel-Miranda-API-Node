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

app.use(express.json())
app.use('/login', loginRouter)
app.use('/api/v1/rooms', roomRouter)
app.use('/api/v1/bookings', bookingRouter)
app.use('/api/v1/contacts', contactRouter)
app.use('/api/v1/users', userRouter)

const swaggerDocs = swaggerJsDoc(swaggerOptions)

app.get('/live', (req: Request, res: Response) => {
    res.send(`${new Date().toISOString()}`)
})

app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})