import { expect } from "chai";
import Calculator from "../src/calculator.js";

describe("Calculator", () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });
  describe("Adunare", () => {
    it("Ar trebui sa adune 2 numere corect", () => {
      const rezult = calculator.add(2, 3);
      expect(rezult).to.equal(5);
    });
    it("ar trebui sa verifice ca un numar este mai mare decat altul", function () {
      const rezult = calculator.add(2, 3);
      expect(rezult).to.be.above(3);
    });
    it("ar trebui sa verifice ca un numar este mai mic decat altul", function () {
      const rezult = calculator.add(2, 3);
      expect(rezult).to.be.below(10);
      expect(rezult).to.be.a("number");
      expect(rezult).to.not.be.a("string");
    });
  });

  describe("Scadere", () => {
    it("Ar trebui sa scada 2 numere corect", () => {
      const rezult = calculator.subtract(5, 3);
      expect(rezult).to.equal(2);
    });
    it("ar trebui sa verifice ca un numar este mai mare decat altul", function () {
      const rezult = calculator.subtract(5, 3);
      expect(rezult).to.be.above(1);
    });
    it("ar trebui sa verifice ca un numar este mai mic decat altul", function () {
      const rezult = calculator.subtract(5, 3);
      expect(rezult).to.be.below(3);
      expect(rezult).to.be.a("number");
      expect(rezult).to.not.be.a("string");
    });
  });
});
