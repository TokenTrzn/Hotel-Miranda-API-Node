import { ResultSetHeader, RowDataPacket } from "mysql2";
import { RoomInterface } from "../interfaces/RoomInterface";
import { ServiceInterface } from "../interfaces/ServiceInterface";
import { RoomModel } from "../models/RoomSchema";
import { connectSql } from "../utils/database";

export const getRooms = async () => {
    const [rows] = await connectSql.query('SELECT * FROM rooms')
    return rows
}

export const getRoomById = async (id: number) => {
    const [room] = await connectSql.query<RowDataPacket[]>('SELECT * FROM rooms WHERE id = ?', [id])
    return room[0]
}

export const createRoom = async (room: RoomInterface) => {
    const [result] = await connectSql.query<ResultSetHeader>(
        'INSERT INTO rooms (photo, number, name, type, amenities, price, offerPrice, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [room.photo, room.number, room.name, room.type, room.amenities, room.price, room.offerPrice, room.status]
    )
    return result
}

export const updateRoom = async (id: number, room: RoomInterface) => {
    const [result] = await connectSql.query<ResultSetHeader>(
        'UPDATE rooms SET photo = ?, number = ?, name = ?, type = ?, amenities = ?, price = ?, offerPrice = ?, status WHERE id = ?',
        [room.photo, room.number, room.name, room.type, room.amenities, room.price, room.offerPrice, room.status, id]
    )
    return result
}

export const deleteRoom = async (id: number) => {
    const [result] = await connectSql.query<ResultSetHeader>('DELETE FROM rooms WHERE id = ?', [id])
    return result
}









export class RoomService implements ServiceInterface<RoomInterface> {
    async fetchAll(): Promise<RoomInterface[]> {
        try {
            const rooms: RoomInterface[] = await RoomModel.find()
            return rooms
        } catch (error) {
            throw error
        }
    }

    async fetchById(id: string): Promise<RoomInterface> {
        try {
            const room: RoomInterface | null = await RoomModel.findById(id)
            if (!room) {
                throw new Error('Room Not Found')
            }
            return room
        } catch (error) {
            throw error
        }
    }

    async create(room: RoomInterface): Promise<RoomInterface> {
        const newRoom = new RoomModel(room)
        await newRoom.save()
        return newRoom
    }

    async update(id: string, room: RoomInterface): Promise<RoomInterface | null> {
        try {
            const updatedRoom: RoomInterface | null = await RoomModel.findByIdAndUpdate(
                { id: id },
                room
            )
            if (updatedRoom === null) {
                return null
            }

            return updatedRoom
        } catch (error) {
            throw error
        }
    }

    async delete(id: string): Promise<boolean> {
        try {
            const deletedRoom = await RoomModel.findByIdAndDelete(id)
            if (deletedRoom === null) {
                throw new Error('Room Not Found')
            }
            
            return true
        } catch (error) {
            throw error
        }
    }
}