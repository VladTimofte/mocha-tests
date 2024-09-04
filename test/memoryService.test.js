import { expect } from "chai";
import MemoryService from "../src/memoryService.js";

describe("MemoryService", () => {
  let service;

  beforeEach(() => {
    service = new MemoryService();
  });

  describe("performOperation", () => {
    it("ar trebui sa efectueze adunarea si sa stocheze rezultatul in memorie", () => {
      const result = service.performOperation("add", 2, 3);
      expect(result).to.equal(5);
      expect(service.getMemory()).to.deep.equal([5]);
      expect(result).to.be.a("number");
    });

    it("ar trebui să efectueze scăderea și să stocheze rezultatul în memorie", function () {
      const result = service.performOperation("subtract", 5, 3);
      expect(result).to.equal(2); // Verifică dacă rezultatul este 2
      expect(service.getMemory()).to.deep.equal([2]); // Verifică dacă memoria conține 2
      expect(result).to.be.a("number"); // Verifică dacă rezultatul este un număr
    });

    it("ar trebui să efectueze înmulțirea și să stocheze rezultatul în memorie", function () {
      const result = service.performOperation("multiply", 4, 2);
      expect(result).to.equal(8); // Verifică dacă rezultatul este 8
      expect(service.getMemory()).to.deep.equal([8]); // Verifică dacă memoria conține 8
      expect(result).to.be.a("number"); // Verifică dacă rezultatul este un număr
    });

    it("ar trebui să efectueze împărțirea și să stocheze rezultatul în memorie", function () {
      const result = service.performOperation("divide", 10, 2);
      expect(result).to.equal(5); // Verifică dacă rezultatul este 5
      expect(service.getMemory()).to.deep.equal([5]); // Verifică dacă memoria conține 5
      expect(result).to.be.a("number"); // Verifică dacă rezultatul este un număr
    });

    it("ar trebui sa arunce o eroare pentru operatii invalide", () => {
      expect(() => service.performOperation("qweqweewre", 2, 3)).to.throw(
        "Invalid operation"
      );
      expect(() => service.performOperation("qweqweewre", 2, 3)).to.throw();
      expect(() => service.performOperation("qweqweqweqw", 2, 3)).to.not.throw(
        "O eroare anume"
      );
    });
  });
});
