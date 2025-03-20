import mongoose from "mongoose"

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