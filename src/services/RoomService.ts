import { RoomInterface } from "../interfaces/RoomInterface";
import { ServiceInterface } from "../interfaces/ServiceInterface";
import { RoomModel } from "../models/RoomSchema";


export class RoomService implements ServiceInterface<RoomInterface> {
    async fetchAll(): Promise<RoomInterface[]> {
        try {
            const rooms: RoomInterface[] = await RoomModel.find()
            return rooms
        } catch (error) {
            throw error
        }
    }

    async fetchById(id: number): Promise<RoomInterface> {
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

    async update(id: number, room: RoomInterface): Promise<RoomInterface | null> {
        try {
            const roomToUpdate: RoomInterface | null = await RoomModel.findById(id)
            if (roomToUpdate === null) {
                throw new Error('Room Not Found')
            }
            const roomObj = roomToUpdate.toObject()
            const updatedRoom = { ...roomObj, ...room }
            await RoomModel.findByIdAndUpdate(id, updatedRoom)

            return updatedRoom
        } catch (error) {
            throw error
        }
    }

    async delete(id: number): Promise<boolean> {
        try {
            const roomToDelete = await RoomModel.findById(id)
            if (roomToDelete === null) {
                throw new Error('Room Not Found')
            }
            await RoomModel.findByIdAndDelete(id)
            
            return true
        } catch (error) {
            throw error
        }
    }
}