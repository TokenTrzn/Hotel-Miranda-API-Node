import { RoomInterface } from "../interfaces/RoomInterface";
import roomsData from '../data/roomsData.json'
import { ServiceInterface } from "../interfaces/ServiceInterface";


export class RoomService implements ServiceInterface<RoomInterface> {
    private rooms: RoomInterface[] = roomsData as RoomInterface[]

    fetchAll(): RoomInterface[] {
        return this.rooms
    }

    fetchById(id: number): RoomInterface | undefined {
        return this.rooms.find((room) => room.id === id)
    }

    create(room: RoomInterface): RoomInterface {
        const newRoom = { ...room, id: this.rooms.length + 1 }
        this.rooms.push(newRoom)
        return newRoom
    }

    update(id: number, room: RoomInterface): RoomInterface | null {
        const roomToUpdate = this.rooms.filter((room) => room.id === id)
        if (roomToUpdate.length > 0) {
            const updateRoom = { ...roomToUpdate[0], ...room }
            const result = this.rooms.filter((room) => room.id !== id)
            result.push(updateRoom)
            this.rooms = result
            return updateRoom
        }
        return null
    }

    delete(id: number): boolean {
        const roomToDelete = this.rooms.filter((room) => room.id === id)
        if (roomToDelete.length > 0) {
            this.rooms = this.rooms.filter((room) => room.id !== id)
            return true
        }
        return false
    }
}