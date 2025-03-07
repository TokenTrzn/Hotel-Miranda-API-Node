import mongoose from "mongoose"
import { createPool } from "mysql2/promise"

export const connectDB = async (): Promise<void> => {
    try {
        console.log(process.env.MONGO_URI)
        await mongoose.connect(process.env.MONGO_URI || '')
        console.log('Conectado con éxito')
    } catch (error) {
        console.error('Error en la conexión: ', error)
        process.exit(1)
    }
}

export const connectSql = createPool({
    host: 'localhost',
    user: 'root',
    password: process.env.SQL_PASSWORD || 'root',
    database: process.env.SQL_DB_NAME || 'hotel_miranda',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})