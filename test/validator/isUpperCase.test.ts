import chai from 'chai';
import { isUpperCase, } from '../../index';

describe('#isUpperCase Function', () => {
    it('Should return type of boolean', () => {
        chai.assert.isBoolean(isUpperCase('UPPER CASE!'));
    });
    it('Should return true', () => {
        chai.assert.equal(isUpperCase('UPPER CASE'), true);
    });

    it('Should return false', () => {
        chai.assert.equal(isUpperCase('Upper Case'), false);
    });
});