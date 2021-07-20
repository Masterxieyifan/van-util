import chai from 'chai';
import { isLowerCase, } from '../../index';

describe('#isLowerCase Function', () => {
    it('Should return type of boolean', () => {
        chai.assert.isBoolean(isLowerCase('lower case'));
    });
    it('Should return true', () => {
        chai.assert.equal(isLowerCase('lower case'), true);
    });

    it('Should return false', () => {
        chai.assert.equal(isLowerCase('Lower Case'), false);
    });
});