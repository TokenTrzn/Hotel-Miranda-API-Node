import { ResultSetHeader, RowDataPacket } from "mysql2";
import { ContactInterface } from "../interfaces/ContactInterface";
import { ServiceInterface } from "../interfaces/ServiceInterface";
import { ContactModel } from "../models/ContactSchema";
import { connectSql } from "../utils/database";

export const getContacts = async () => {
    const [rows] = await connectSql.query('SELECT * FROM contacts')
    return rows
}

export const getContactById = async (id: number) => {
    const [contact] = await connectSql.query<RowDataPacket[]>('SELECT * FROM contacts WHERE id = ?', [id])
    return contact[0]
}

export const createContact = async (contact: ContactInterface) => {
    const [result] = await connectSql.query<ResultSetHeader>(
        'INSERT INTO contacts (date, hour, name, email, phone, comment, isArchived) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [contact.date, contact.hour, contact.name, contact.email, contact.phone, contact.comment, contact.isArchived]
    )
    return result
}

export const updateContact = async (id: number, contact: ContactInterface) => {
    const [result] = await connectSql.query<ResultSetHeader>(
        'UPDATE contacts SET date = ?, hour = ?, name = ?, email = ?, phone = ?, comment = ?, isArchived = ? WHERE id = ?',
        [contact.date, contact.hour, contact.name, contact.email, contact.phone, contact.comment, contact.isArchived, id]
    )
    return result
}

export const deleteContact = async (id: number) => {
    const [result] = await connectSql.query<ResultSetHeader>('DELETE FROM contacts WHERE id = ?', [id])
    return result
}

export class ContactService implements ServiceInterface<ContactInterface> {
    async fetchAll(): Promise<ContactInterface[]> {
        try {
            const contacts: ContactInterface[] = await ContactModel.find()
            return contacts
        } catch (error) {
            throw error
        }
    }

    async fetchById(id: string): Promise<ContactInterface> {
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

    async update(id: string, contact: ContactInterface): Promise<ContactInterface | null> {
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

    async delete(id: string): Promise<boolean> {
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