import { ContactInterface } from "../interfaces/ContactInterface"

    export const validateContact = (contact: ContactInterface) => {
        if (typeof contact.date !== 'string' || contact.date === null) {
            throw new Error('Invalid Date') 
        }
        if (typeof contact.hour !== 'string' || contact.date === null) {
            throw new Error('Invalid Hour') 
        }
        if (typeof contact.name !== 'string' || contact.name === null) {
            throw new Error('Invalid Name') 
        }
        if (typeof contact.email !== 'string' || contact.email === null) {
            throw new Error('Invalid Email') 
        }
        if (typeof contact.phone !== 'string' || contact.phone === null) {
            throw new Error('Invalid Phone') 
        }
        if (typeof contact.comment !== 'string' || contact.comment === null) {
            throw new Error('Invalid Comment') 
        }
        if (typeof contact.isArchived !== 'boolean' || contact.isArchived === null) {
            throw new Error('Invalid Archived') 
        }
    }


