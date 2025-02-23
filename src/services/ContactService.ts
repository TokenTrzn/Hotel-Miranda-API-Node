import { ContactInterface } from "../interfaces/ContactInterface";
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

    async update(id: number, contact: ContactInterface): Promise<ContactInterface | null> {
        try {
            const updatedContact: ContactInterface | null = await ContactModel.findByIdAndUpdate(
                { id: id },
                contact
            )
            if (updatedContact === null) {
                return null
            }

            return updatedContact
        } catch (error) {
            throw error
        }
    }

    async delete(id: number): Promise<boolean> {
        try {
            const deletedContact = await ContactModel.findByIdAndDelete(id)
            if (deletedContact === null) {
                throw new Error('Contact Not Found')
            }

            return true
        } catch (error) {
            throw error
        }
    }
}