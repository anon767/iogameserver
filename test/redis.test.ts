import {suite, test, slow, timeout} from "mocha-typescript";
import * as assert from "assert";
import Redis = require("redis");
import {PLAYER_TYPE} from "../src/Domain/Entities/Types";
import {Player} from "../src/Domain/Entities/Player";
import {PubSubFactory} from "../src/Database/impl/PubSubFactory";

@suite
class RedisDBTest {


    @test pubsubTest() {

        let nrp = PubSubFactory.getInstance().getBus();

        nrp.on('city:*', (data, channel) => {
            assert.equal(data.city, "Paris");
        });

        nrp.emit('city:hello', {city: 'Paris'});
        nrp.quit();
    }


}