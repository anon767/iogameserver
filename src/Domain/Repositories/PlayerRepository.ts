import {Player} from "../Entities/Player";
import {PLAYER_TYPE} from "../Entities/Types";

export class PlayerRepository {

    private persistenceService: PersistenceService = null;

    constructor(persistenceService: PersistenceService) {
        this.persistenceService = persistenceService;
    }

    public save(player: Player) {
        return this.persistenceService.save(player);
    }

    public getAll(callBack) {
        return this.persistenceService.getAll(callBack, PLAYER_TYPE);
    }

    public delete(id: number) {
        this.persistenceService.deleteByID(id, PLAYER_TYPE);
    }

    public getById(id: number, callBack){
        this.persistenceService.getById(id,callBack, PLAYER_TYPE);
    }

}