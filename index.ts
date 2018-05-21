import {Server} from './src/Server/Server';
import {EventBus} from "./src/Server/EventBus";
import {ClientHandlerImpl} from "./src/Server/impl/ClientHandlerImpl";
import {World} from "./src/State/World";
import sleep = require('sleep');

const eventBus = new EventBus();
const clientHandler = new ClientHandlerImpl(eventBus);
const server = new Server(8080, clientHandler);
const world = new World();
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






