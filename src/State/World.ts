import Matter = require('matter-js');
import {GameObject} from "../Domain/Entities/GameObject";
import {Entity} from "../Domain/Entities/Entity";


export class World {
    private engine = null;
    private runner = null;

    constructor() {
        this.engine = Matter.Engine.create();
        this.engine.enableSleeping = true;
        this.runner = Matter.Runner.create();
    }

    public addObject(entity: Entity) {
        let object = Matter.Bodies.rectangle(entity.x, entity.y, entity.width, entity.height);
        Matter.World.add(this.engine.world, object);
        return object;
    }

    public removeObject(id) {
        Matter.World.remove(this.engine.world, id);
    }

    public tick(fps: number) {
        Matter.Runner.tick(this.runner, this.engine, 1000 / fps);
    }

}