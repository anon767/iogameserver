import {Server} from './src/Server/Server';
import {ClientHandlerImpl} from "./src/Server/impl/ClientHandlerImpl";
import {World} from "./src/State/World";
import sleep = require('sleep');
import {StateSyncer} from "./src/State/StateSyncer";
import {PubSubFactory} from "./src/Database/impl/PubSubFactory";

const eventBus = PubSubFactory.getInstance().getBus();
const clientHandler = new ClientHandlerImpl(eventBus);
const server = new Server(8080, clientHandler);
const world = new World();
const stateSyncer = new StateSyncer(eventBus, world);

server.listen();

const FPS: number = 50;
const RATE: number = 1000 / FPS;


function handle() {
    world.tick(FPS);
    sleep.msleep(RATE);
    setImmediate(() => {
        handle()
    });
}

setImmediate(() => {
    handle()
});






