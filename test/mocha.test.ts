import {suite, test, slow, timeout} from "mocha-typescript";
import * as assert from "assert";

@suite
class MochaTest {
    @test trivialTest() {
        assert.equal(1, 1, "Expected one to equal 1.");
    }
}