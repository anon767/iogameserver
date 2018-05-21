import {RedisDatabase} from "./RedisDatabase";
import {Entity} from "../../Domain/Entities/Entity";

export class RedisPersistenceService implements PersistenceService {
    private redisDatabase: RedisDatabase = null;

    constructor(redisDatabase: RedisDatabase) {
        this.redisDatabase = redisDatabase;
    }

    getById(id: number, callBack: any, prefix: string | number) {
        return this.redisDatabase.read(prefix + "_" + id, function (error, result) {
            callBack(error, JSON.parse(result));
        });
    }

    save(object: Entity): void {
        this.redisDatabase.create(object.type + "_" + object.id, JSON.stringify(object));
    }

    deleteBy(object: Entity) {
        this.redisDatabase.delete(object.type + "_" + object.id);
    }

    deleteByID(id: number, prefix: string | number) {
        this.redisDatabase.delete(prefix + "_" + id);
    }

    getAll(callBack: any, prefix: string | number) {
        this.redisDatabase.getAllBy(prefix + "_*", callBack);
    }

}