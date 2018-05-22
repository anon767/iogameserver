import {suite, test, slow, timeout} from "mocha-typescript";
import * as assert from "assert";
import {World} from "../src/State/World";
import {Player} from "../src/Domain/Entities/Player";

@suite
class MochaTest {
    private world: World = null;

    before() {
        this.world = new World();
    }

    @test trivialTest() {
        let tom: Player = new Player(0, null, 0, 0, "Tom");
        let matterObject = this.world.addObject(tom);
        this.world.tick(60);
        assert.notEqual(matterObject.position.y, 0,"object should fall down");
    }
}