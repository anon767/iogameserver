import {Entity} from "./Entity";
import {GAMEOBJECT_TYPE} from "./Types";

export class GameObject extends Entity {

    public type: number = GAMEOBJECT_TYPE;

    constructor(id, x, y, w, h) {
        super();
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.id = id;
    }
}