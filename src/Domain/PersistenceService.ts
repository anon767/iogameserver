interface PersistenceService {
    getById(id: number, callBack: any, prefix: any | null): void;

    save(object: any): void;

    deleteBy(object: any): void;

    deleteByID(id: number, prefix: any | null): void;

    getAll(callBack: any, prefix: any | null): void;
}