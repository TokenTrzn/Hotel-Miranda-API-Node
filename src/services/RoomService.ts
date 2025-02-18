import { RoomInterface } from "../interfaces/RoomInterface";
import roomsData from '../data/roomsData.json'
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

    update(id: number, room: RoomInterface): Promise<RoomInterface | null> {
        return Promise.resolve(null)
    }

    delete(id: number): Promise<boolean> {
        return Promise.resolve(false)
    }
}