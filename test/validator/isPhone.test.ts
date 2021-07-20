import chai from 'chai';
import { isPhone, } from '../../index';

describe('#isPhone Function', () => {
    it('Should return type of boolean', () => {
        chai.assert.isBoolean(isPhone('0755-27611111'));
    });
    it('Should return true', () => {
        chai.assert.equal(isPhone('0755-27611111'), true);
    });
});