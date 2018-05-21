import {GameObject} from "../Entities/GameObject";

export class GameObjectRepository {

    private persistenceService: PersistenceService<GameObject> = null;

    constructor(persistenceService: PersistenceService<GameObject>) {
        this.persistenceService = persistenceService;
    }

    public save(gameObject: GameObject): number {
        return this.persistenceService.save(gameObject);
    }

    public deleteByID(id: number) {
        this.persistenceService.deleteByID(id);
    }

    public deleteBy(gameObject: GameObject) {
        this.persistenceService.deleteBy(gameObject);
    }

    public getAll(): Object[] {
        return this.persistenceService.getAll();
    }

}