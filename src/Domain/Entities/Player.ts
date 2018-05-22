import {GameObject} from "./GameObject";
import {PLAYER_TYPE} from "./Types";

const PLAYER_WIDTH: number = 50;
const PLAYER_HEIGHT: number = 50;

export class Player extends GameObject {
    private socket;
    public angle: number;
    public name: string;

    constructor(id: number, socket, x, y, name) {
        super(id, x, y, PLAYER_WIDTH, PLAYER_HEIGHT);
        this.x = x;
        this.name = name;
        this.y = y;
        this.socket = socket;
        this.type = PLAYER_TYPE;

    }

    public handleCommand(globalSocket, message) {

    }

    public move(x: number, y: number) {
        this.x += x;
        this.y += y;
    }

    public directTo(angle: number) {
        this.angle = angle;
    }

    public send(message) {
        if (this.socket) {
            this.socket.send(message);
        }
    }

}