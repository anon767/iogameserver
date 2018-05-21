import {suite, test, slow, timeout} from "mocha-typescript";
import * as assert from "assert";
import {RedisDatabasse} from "../src/Database/impl/RedisDatabasse";
import Redis = require("redis");

@suite
class RedisDBTest {
    @test trivialTest() {
        let redisInstance = new RedisDatabasse("127.0.0.1", 6379);
        redisInstance.create({id: 0, val: "test"});
        redisInstance.read({id: 0}, function (error, result) {
            assert.equal(result.val, "test");
        })
        redisInstance.close();
    }
}