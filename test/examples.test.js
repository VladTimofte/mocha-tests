import { assert, expect, should } from "chai";

should();

const numbers = [1, 2, 3, 4, 5];
const person = { name: "John", age: 30 };

describe("Untest simplu de array", function () {
  it("should return -1 when the value is nt present", function () {
    assert.equal(numbers.indexOf(9), -1);
  });
});

// ===== ASSERT ===== //
describe("Teste Assert", function () {
  describe("Numbere", function () {
    //Numbere
    it("ar trebui sa verifice daca doua numere sunt egale", function () {
      assert.equal(5, 5, "5 este egal cu 5");
    });
    it("ar trebui sa verifice daca un numar este mai mare decat altul", function () {
      assert.isAbove(10, 5, "10 este mai mare decat 5");
    });
    it("ar trebui sa verifice daca un numar este mai mic decat altul", function () {
      assert.isBelow(4, 5, "4 este mai mic decat 5");
    });
  });

  describe("Stringuri", function () {
    //Stringuri
    it("ar trebui sa verifice daca doua stringuri sunt egale", function () {
      assert.equal("salut", "salut", "stringurile sunt egale");
    });
    it("ar trebui sa verifice daca un string continte un anumit substring", function () {
      assert.include("salut Vlad", "Vlad", "sintrul contine cuvantul Vlad");
    });
    it("ar trebui sa verifice lingimea unui string", function () {
      assert.lengthOf("chai", 4, "lungimea string-ului este de 4");
    });
  });

  describe("Obiecte", function () {
    //Obiecte
    it("ar trebui sa verifice daca doua obiecte sunt egale", function () {
      assert.deepEqual(
        person,
        { name: "John", age: 30 },
        "obiectele sunt egale"
      );
    });
    it("ar trebui sa verifice daca un obiect are o anumita proprietate", function () {
      assert.property(person, "name", "obiectele are proprpietatea name");
    });
    it("ar trebui sa verifice daca un obiect NU are o anumita proprietate", function () {
      assert.notProperty(
        person,
        "address",
        "obiectul nu are proprietatea address"
      );
    });
  });

  describe("Array-uri", function () {
    //Array-uri
    it("ar trebui sa verifice daca o variabila este un array", function () {
      assert.isArray(numbers, "este un array");
    });
    it("ar trebui sa verifice daca un array contine o valoare specifica", function () {
      assert.include(numbers, 2, "array contine numarul 2");
    });
    it("ar trebui sa verifice lungimea unui array", function () {
      assert.lengthOf(numbers, 5, "lungimea array-ului este de 5");
    });
  });
});
