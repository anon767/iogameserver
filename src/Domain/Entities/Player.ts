import {GameObject} from "./GameObject";

const PLAYER_WIDTH: number = 50;
const PLAYER_HEIGHT: number = 50;

export class Player extends GameObject {
    public socket;
    public angle: number;
    public name: string;

    constructor(socket, x, y, name) {
        super(x, y, PLAYER_WIDTH, PLAYER_HEIGHT, true);
        this.x = x;
        this.name = name;
        this.y = y;
        this.socket = socket;
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