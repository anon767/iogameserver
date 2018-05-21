import Matter = require('matter-js');
import {GameObject} from "../Domain/Entities/GameObject";


export class World {
    private engine = null;
    private runner = null;

    constructor() {
        this.engine = Matter.Engine.create();
        this.runner = Matter.Runner.create();
    }

    public addObject(gameObject: GameObject) {
        let object = Matter.Bodies.rectangle(gameObject.x, gameObject.y, gameObject.width, gameObject.height);
        Matter.World.add(this.engine.world, object);
    }

    public removeObject(id) {
        Matter.World.remove(this.engine.world, id);
    }

    public tick(fps: number) {

        Matter.Runner.tick(this.runner, this.engine, 1000 / fps);

    }

}