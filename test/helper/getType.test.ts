import chai from 'chai';
import { getType, } from '../../index';

describe('#getType Function', () => {
    it('Should return type of string', () => {
        chai.assert.isString(getType(true));
    });
    it('Should return array', () => {
        chai.assert.equal(getType([1, 2, 3]), 'array');
    });
    it('Should return object', () => {
        chai.assert.equal(getType({ a: 1, }), 'object');
    });
});