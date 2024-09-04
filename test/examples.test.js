import { assert, expect, should } from "chai";

should();

const numbers = [1, 2, 3, 4, 5];

describe("Untest simplu de array", function () {
  it("should return -1 when the value is nt present", function () {
    assert.equal(numbers.indexOf(9), -1);
  });
});
