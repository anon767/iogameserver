import {GameObject} from "../Entities/GameObject";
import {GAMEOBJECT_TYPE} from "../Entities/Types";

export class GameObjectRepository {

    private persistenceService: PersistenceService = null;

    constructor(persistenceService: PersistenceService) {
        this.persistenceService = persistenceService;
    }

    public save(gameObject: GameObject) {
        this.persistenceService.save(gameObject);
    }

    public deleteByID(id: number) {
        this.persistenceService.deleteByID(id, GAMEOBJECT_TYPE);
    }

    public deleteBy(gameObject: GameObject) {
        this.persistenceService.deleteBy(gameObject);
    }

    public getAll(callBack) {
        return this.persistenceService.getAll(callBack, GAMEOBJECT_TYPE);
    }

}