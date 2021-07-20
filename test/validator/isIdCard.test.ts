import chai from 'chai';
import { isIdCard, } from '../../index';

describe('#isIdCard Function', () => {
    it('Should return type of boolean', () => {
        chai.assert.isBoolean(isIdCard('11010119900307627X'));
    });
    it('Should return true', () => {
        chai.assert.equal(isIdCard('11010119900307627X'), true);
    });
});