import Redis = require('redis')

export class RedisDatabase implements Database {
    public redisInstance = null;

    constructor(host, port) {
        this.redisInstance = Redis.createClient(port, host);
    }


    create(id: string, object: string) {
        this.redisInstance.set(id, object)
    }

    read(id: string, callBack: any) {
        this.redisInstance.get(id, function (error, result) {
            callBack(error, result);
        });
    }

    update(id: string, object: string) {
        this.create(id, object);
    }

    delete(id: string) {
        this.redisInstance.remove(id);
    }

    close() {
        this.redisInstance.quit();
    }

    getAllBy(key: string, callBack: any) {
        this.redisInstance.keys(key, function (err, keys) {
            callBack(err, keys);
        })
    }

}