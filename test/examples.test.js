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

describe("Teste should", function () {
  describe("Numere", function () {
    //Numere
    it("ar trebui sa verifice egalitatea celor 2 numere date", function () {
      (5).should.be.equal(5);
    });
    it("ar trebui sa verifice daca un numar este mai mare decat altul", function () {
      (10).should.be.above(5);
    });
    it("ar trebui sa verifice daca un numar este mai mic decat altul", function () {
      (4).should.be.below(5);
    });
  });

  describe("String-uri", function () {
    //String-uri
    it("ar trebui sa verifice daca 2 string-uri sunt egale", function () {
      "salut".should.be.equal("salut");
    });
    it("ar trebui sa verifice daca un string contine un anumit substring", function () {
      "salut, eu sunt Vlad".should.contain("Vlad");
    });
    it("ar trebui sa verifice lungimea unui string", function () {
      "chai".should.have.lengthOf(4);
    });
  });

  describe("Obiecte", function () {
    //Obiecte
    it("ar trebui sa verifice daca un obiect are o anume proprietate", function () {
      person.should.have.property("name");
    });
    it("ar trebui sa verifice daca un obiect NU are o anume proprietate", function () {
      person.should.not.have.property("address");
    });
    it("ar trebui sa verifice daca doua obiecte sunt egale", function () {
      person.should.deep.equal({ name: "John", age: 30 });
    });
  });

  describe("Array-uri", function () {
    //Array-uri
    it("ar trebui sa verifice daca o variabila este un array", function () {
      numbers.should.be.an("array");
    });
    it("ar trebui sa verifice daca array-ul contine o valoare specifica", function () {
      numbers.should.be.an("array").that.includes(2);
    });
    it("ar trebui sa verifice llungimea unui array", function () {
      numbers.should.have.lengthOf(5);
    });
  });
});

describe("Teste Expect", function () {
  //Numbere
  describe("Numere", function () {
    it("ar trebui sa verifice ca dou numere sunt egale", function () {
      expect(5).to.equal(5);
    });
    it("ar trebui sa verifice ca un numar este mai mare decat altul", function () {
      expect(10).to.be.above(5);
    });
    it("ar trebui sa verifice ca un numar este mai mic decat altul", function () {
      expect(4).to.be.below(5);
    });
  });

  //String-uri
  describe("Strin-uri", function () {
    it("ar trebui sa verifice daca 2 string-uri sunt egale", function () {
      expect("salut").to.equal("salut");
    });
    it("ar trebui sa verifice daca un string contine un alt substring", function () {
      expect("salut, eu sunt Vlad").to.include("Vlad");
    });
    it("ar trebui sa verificelungimea unui string", function () {
      expect("chai").to.have.lengthOf(4);
    });
  });

  //Obiecte
  describe("Obiecte", function () {
    it("ar trebui sa verifice daca un obiect are o anume proprietate", function () {
      expect(person).to.have.property("name");
    });
    it("ar trebui sa verifice daca un obiect NU are o anume proprietate", function () {
      expect(person).to.not.have.property("address");
    });
    it("ar trebui sa verifice daca doua obiecte sunt egale", function () {
      expect(person).to.deep.equal({ name: "John", age: 30 });
    });
  });

    //Array-uri
    describe("Array-uri", function () {
        it("ar trebui sa verifice daca o variabila este un array", function () {
          expect(numbers).to.be.an("array");
        });
        it("ar trebui sa verifice daca array-ul continue o valoare specifica", function () {
            expect(numbers).to.be.an("array").that.includes(2)
        });
        it("ar trebui sa verifice daca primul element din array-ul numbers este 1", function () {
          expect(numbers[0]).to.equal(1)
        });
      });
});
