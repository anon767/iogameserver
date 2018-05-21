import {suite, test, slow, timeout} from "mocha-typescript";
import * as assert from "assert";
import {RedisDatabase} from "../src/Database/impl/RedisDatabase";
import Redis = require("redis");
import {PLAYER_TYPE} from "../src/Domain/Entities/Types";
import {Player} from "../src/Domain/Entities/Player";
import {PlayerRepository} from "../src/Domain/Repositories/PlayerRepository";
import {RedisPersistenceService} from "../src/Database/impl/RedisPersistenceService";

@suite
class RedisDBTest {
    private redisInstance = null;
    private playerRepository: PlayerRepository = null;

    before() {
        this.redisInstance = new RedisDatabase("127.0.0.1", 6379);
        let rps: RedisPersistenceService = new RedisPersistenceService(this.redisInstance);
        this.playerRepository = new PlayerRepository(rps);
    }

    @test trivialTest() {
        this.redisInstance.create(PLAYER_TYPE + "_" + 0, JSON.stringify({id: 0, name: "tom"}));
        this.redisInstance.read(PLAYER_TYPE + "_" + 0, function (error, result) {
            assert.equal(JSON.parse(result).name, "tom");
        });
    }

    @test domainIntegrationTest_a() {
        let tom: Player = new Player(0, null, 0, 0, "Tom");
        this.playerRepository.save(tom);
        this.playerRepository.getAll(function (error, result) {
            assert.notEqual(-1, result.indexOf("0_0"));
        });
    }

    @test domainIntegrationTest_b() {
        let tom: Player = new Player(0, null, 0, 0, "Tom");
        this.playerRepository.save(tom);
        this.playerRepository.getById(tom.id, function (error, result) {
            assert.equal(tom.name, result.name);
        });
    }

    @test pubsubTest(){


    }

    after() {
        this.redisInstance.close();
    }
}