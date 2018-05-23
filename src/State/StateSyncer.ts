import {PLAYERDISCONNECT, PLAYERJOINED, PLAYERMOVE} from "../Server/Events";
import {World} from "./World";

export class StateSyncer {
    private globalEventBus = null;

    constructor(eventBus, world: World) {
        this.globalEventBus = eventBus;
        this.globalEventBus.on(PLAYERDISCONNECT, (data, channel) => {

            console.log("Player disconnected", data);
        });
        this.globalEventBus.on(PLAYERMOVE, (data, channel) => {
            console.log("Player moved ", data);
        });
        this.globalEventBus.on(PLAYERJOINED, (data, channel) => {

            console.log("Player joined", data);
        });
    }

    remove() {
        this.globalEventBus.removeAllListeners();
    }
}