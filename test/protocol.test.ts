import {suite, test, slow, timeout} from "mocha-typescript";
import * as assert from "assert";
import {World} from "../src/State/World";
import {Player} from "../src/Domain/Entities/Player";
import {RequestSchema, ResponseSchema, ServerSchema} from "../src/Domain/ServerSchema";

@suite
class MochaTest {
    @test request_schema_a() {
        let update = {
            playerName: "Tom",
            x: 200,
            y: 100,
            angle: 30,
            move: true,
            shoot: false
        };

        let encoded = (ServerSchema.encode(update, RequestSchema));
        let decoded = ServerSchema.decode(encoded, RequestSchema);
        assert.deepEqual(decoded, update);
    }

    @test request_schema_b() {
        let update = {
            playerName: "Tom",
        };
        let encoded = (ServerSchema.encode(update, RequestSchema));
        let decoded = ServerSchema.decode(encoded, RequestSchema);
        assert.deepEqual(decoded, update);
    }

    @test response_schema() {
        let update = {
            id: 0,
            x: 1,
            y: 1,
            angle: 1
        };
        let encoded = (ServerSchema.encode(update, ResponseSchema));
        let decoded = ServerSchema.decode(encoded, ResponseSchema);
        assert.deepEqual(decoded, update);
    }
}