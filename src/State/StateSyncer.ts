import {PubSubFactory} from "../Database/impl/PubSubFactory";
import {EventBus} from "../Server/EventBus";
import {PLAYERDISCONNECT, PLAYERJOINED, PLAYERMOVE} from "../Server/Events";

export class StateSyncer {
    private globalEventBus = null;

    constructor(eventBus: EventBus) {
        this.globalEventBus = PubSubFactory.getInstance().getBus();
        let globalEventBus = this.globalEventBus;
        eventBus.on(PLAYERDISCONNECT, function (player) {
            globalEventBus.emit(PLAYERDISCONNECT, JSON.stringify(player));
        });
        eventBus.on(PLAYERJOINED, function (player) {
            globalEventBus.emit(PLAYERJOINED, JSON.stringify(player));
        });
        eventBus.on(PLAYERMOVE, function (player) {
            globalEventBus.emit(PLAYERMOVE, JSON.stringify(player));
        });

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
}