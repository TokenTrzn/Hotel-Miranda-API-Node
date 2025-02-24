export interface UserInterface {
    id: string;
    photo: string;
    name: string;
    email: string;
    startDate: string;
    description: string;
    contact: string;
    status: 'ACTIVE' | 'INACTIVE' | string;
    password: string;
}