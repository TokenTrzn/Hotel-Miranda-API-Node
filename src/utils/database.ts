import { createPool } from "mysql2/promise"

export const connectSql = createPool({
    host: 'localhost',
    user: 'root',
    password: process.env.SQL_PASSWORD || 'root',
    database: process.env.SQL_DB_NAME || 'hotel_miranda',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})