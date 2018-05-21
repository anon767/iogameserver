import {EventBus} from "../EventBus";
import {RequestSchema, ResponseSchema, ServerSchema} from "../../Domain/ServerSchema";
import {GameObject} from "../../Domain/Entities/GameObject";
import {Player} from "../../Domain/Entities/Player";

export class ClientHandlerImpl implements ClientHandler {
    private eventBus: EventBus;

    constructor(eventBus: EventBus) {
        this.eventBus = eventBus;
        this.eventBus.on(UPDATEWORLD, this.updateClients)
    }

    public updateClients(gameObjects: GameObject[], players: Player[]) {

    }

    public close(socket){

    }

    public static parseMessage(message: number) {
        try {
            return ServerSchema.decode(message, RequestSchema);
        } catch(Exception) {
            return null;
        }
    }

    public connected(global, socket) {
        let handle = this.handle;
        let close = this.close;
        socket.on('message', function (message) {
            handle(global, socket, message);
        });
        socket.on('close', function () {
            close(socket);
        })
    }

    public handle(global, socket, message) {
        let parsedMessage = ClientHandlerImpl.parseMessage(message);
        if (!parsedMessage) {
            socket.close();
        }



        socket.send(ServerSchema.encode(null
            , ResponseSchema), {binary: true});
    }

}