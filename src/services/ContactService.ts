import { ContactInterface } from "../interfaces/ContactInterface";
import contactsData from '../data/contactsData.json'
import { ServiceInterface } from "../interfaces/ServiceInterface";


export class ContactService implements ServiceInterface<ContactInterface> {
    private contacts: ContactInterface[] = contactsData as ContactInterface[]

    fetchAll(): ContactInterface[] {
        return this.contacts
    }

    fetchById(id: number): ContactInterface | undefined {
        return this.contacts.find((contact) => contact.id === id)
    }

    create(contact: ContactInterface): ContactInterface {  
        const newContact = { ...contact, id: this.contacts.length + 1 }
        this.contacts.push(newContact)
        return newContact
    }

    update(id: number, contact: ContactInterface): ContactInterface | null {
        const contactToUpdate = this.contacts.filter((contact) => contact.id === id)
        if (contactToUpdate.length > 0) {
            const updateContact = { ...contactToUpdate[0], ...contact }
            const result = this.contacts.filter((contact) => contact.id !== id)
            result.push(updateContact)
            this.contacts = result
            return updateContact
        }
        return null
    }

    delete(id: number): boolean {
        const contactToDelete = this.contacts.filter((contact) => contact.id === id)
        if (contactToDelete.length > 0) {
            this.contacts = this.contacts.filter((contact) => contact.id === id)
            return true
        }
        return false
    }
}