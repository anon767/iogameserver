import NRP    = require('node-redis-pubsub');


export class PubSubFactory {

    private static _instance: PubSubFactory = new PubSubFactory();

    bus = null;

    public getBus() {
        return this.bus;
    }

    constructor() {
        if (PubSubFactory._instance) {
            throw new Error("Error: Instantiation failed: Use SingletonClass.getInstance() instead of new.");
        }
        PubSubFactory._instance = this;
        let config = {
            port: 6379, // Port of your locally running Redis server
            scope: 'ioserver'  // Use a scope to prevent two NRPs from sharing messages
        };
        this.bus = new NRP(config);
    }

    public static getInstance(): PubSubFactory {
        return PubSubFactory._instance;
    }


}