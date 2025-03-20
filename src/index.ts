import express, { NextFunction, Request, Response } from 'express'
import dotenv from 'dotenv'
import { loginRouter } from './controllers/LoginController'
import { authenticate } from './middleware/auth'
import { roomRouter } from './controllers/RoomController'
import { bookingRouter } from './controllers/BookingController'
import { contactRouter } from './controllers/ContactController'
import { userRouter } from './controllers/UserController'
import { connectSql } from './utils/database'

const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

dotenv.config()

const cors = require('cors')
const app = express()
const port = process.env.PORT || 3002

app.use(express.json())

app.use(cors())

app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.method === 'OPTIONS')
    res.status(200).end()
  next()
})

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
        url: `http://localhost:${port}`,
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

const runServer = async () => {
  const connection = await connectSql.getConnection()
  console.log('Conectado a la DB')
  connection.release()
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
}

runServer()