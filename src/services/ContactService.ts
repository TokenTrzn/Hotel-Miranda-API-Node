import { ContactInterface } from "../interfaces/ContactInterface";
import contactsData from '../data/contactsData.json'
import { ServiceInterface } from "../interfaces/ServiceInterface";
import { ContactModel } from "../models/ContactSchema";


export class ContactService implements ServiceInterface<ContactInterface> {
    async fetchAll(): Promise<ContactInterface[]> {
        try {
            const contacts: ContactInterface[] = await ContactModel.find()
            return contacts
        } catch (error) {
            throw error
        }
    }

    async fetchById(id: number): Promise<ContactInterface> {
        try {
            const contact: ContactInterface | null = await ContactModel.findById(id)
            if (!contact) {
                throw new Error('Contact Not Found')
            }
            return contact
        } catch (error) {
            throw error
        }
    }

    async create(contact: ContactInterface): Promise<ContactInterface> {
        const newContact = new ContactModel(contact)
        await newContact.save()
        return newContact
    }

    update(id: number, contact: ContactInterface): Promise<ContactInterface | null> {
        return Promise.resolve(null)
    }

    delete(id: number): Promise<boolean> {
        return Promise.resolve(false)
    }
}