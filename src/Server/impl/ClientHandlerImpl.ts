import {RequestSchema, ResponseSchema, ServerSchema} from "../../Domain/ServerSchema";
import {GameObject} from "../../Domain/Entities/GameObject";
import {Player} from "../../Domain/Entities/Player";
import {PLAYERDISCONNECT, PLAYERJOINED, UPDATEWORLD} from "../Events";

export class ClientHandlerImpl implements ClientHandler {
    private eventBus;
    private playerList: Player[] = [];
    private myID = 0;

    static generateUID() {
        return parseInt((Math.random() * 1000).toString());
    }

    constructor(eventBus) {
        this.eventBus = eventBus;
        this.eventBus.on(UPDATEWORLD, this.updateClients);
        this.myID = ClientHandlerImpl.generateUID();
    }

    public updateClients(gameObjects: GameObject[], players: Player[]) {

    }


    public static parseMessage(message: number) {
        try {
            return ServerSchema.decode(message, RequestSchema);
        } catch (Exception) {
            return null;
        }
    }


    public close(player) {
        this.playerList[player.id - this.myID] = null;
        delete this.playerList[player.id - this.myID];
        player.socket.removeAllListeners();
        player.socket.close();
        this.eventBus.emit(PLAYERDISCONNECT, player);
    }

    public connected(global, socket) {
        let player = new Player(this.myID + this.playerList.length, socket, 0, 0, "");
        this.eventBus.emit(PLAYERJOINED, player);
        socket.on('message', function (message) {
            player.handleCommand(global, ClientHandlerImpl.parseMessage(message));
        });
        socket.on('close', function () {
            this.close(player);
        });
    }

    public handle(global, socket, message) {


        socket.send(ServerSchema.encode(null
            , ResponseSchema), {binary: true});
    }

}