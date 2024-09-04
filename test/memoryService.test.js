import { expect } from 'chai';
import MemoryService from '../src/memoryService.js';

describe('MemoryService', () => {
    let service;

    beforeEach(() => {
        service = new MemoryService();
    })

    describe('performOperation', () => {
        it('ar trebui sa efectueze adunarea si sa stocheze rezultatul in memorie', () => {
            const result = service.performOperation('add', 2, 3)
            expect(result).to.equal(5)
            expect(service.getMemory()).to.deep.equal([5])
            expect(result).to.be.a('number')
        })
    })
})