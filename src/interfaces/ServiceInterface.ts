export interface ServiceInterface<T> {
    fetchAll(): Promise<T[]>;
    fetchById(id: number): Promise<T | undefined>;
    create(item: T): Promise<T>;
    update(id: number, item: T): Promise<T | null>;
    delete(id: number): Promise<boolean>;
}