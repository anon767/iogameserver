import {Player} from "../Entities/Player";

export class PlayerRepository {

    private persistenceService: PersistenceService<Player> = null;

    constructor(persistenceService: PersistenceService<Player>) {
        this.persistenceService = persistenceService;
    }

    public save(player: Player) {
        return this.persistenceService.save(player);
    }

    public getAll() : Player[] {
        return this.persistenceService.getAll();
    }

    public delete(id : number){
        this.persistenceService.deleteByID(id);
    }

}