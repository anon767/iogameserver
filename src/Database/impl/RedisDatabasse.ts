import Redis = require('redis')

export class RedisDatabasse implements Database {
    public redisInstance = null;

    constructor(host, port) {
        this.redisInstance = Redis.createClient(port, host);
    }


    create(object: any) {
        this.redisInstance.set(object.id, JSON.stringify(object))
    }

    read(object: any, callBack: any) {
        this.redisInstance.get(object.id, function (error, result) {
            callBack(error, JSON.parse(result));
        });
    }

    update(object: any) {
        this.create(object);
    }

    delete(object: any) {
        this.redisInstance.remove(object.id);
    }

    close() {
        this.redisInstance.quit();
    }

}