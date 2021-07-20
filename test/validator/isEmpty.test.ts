import chai from 'chai';
import { isEmpty, } from '../../index';

describe('#isEmpty Function', () => {
    it('Should return type of boolean', () => {
        chai.assert.isBoolean(isEmpty(null));
    });
    it('Should return true', () => {
        chai.assert.equal(isEmpty('null'), false);
    });
    it('Should return false', () => {
        chai.assert.equal(isEmpty(false), false);
    });
});
