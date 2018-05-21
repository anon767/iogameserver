interface PersistenceService<T> {
    getById(id: number): T;

    save(object: T): number;

    deleteBy(object: T);

    deleteByID(id: number);

    getAll(): T[];
}