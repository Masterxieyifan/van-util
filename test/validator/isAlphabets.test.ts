import chai from 'chai';
import { isAlphabets, } from '../../index';

describe('#isAlphabets Function', () => {
    it('Should return type of boolean', () => {
        chai.assert.isBoolean(isAlphabets('Alphatbets'));
    });
    it('Should return true', () => {
        chai.assert.equal(isAlphabets('Alphatbets'), true);
    });
});