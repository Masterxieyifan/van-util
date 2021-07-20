import { number2Byte, } from '../../index';
import chai from 'chai';

describe('#number2Byte Function', () => {
    it('Should type of string', () => {
        chai.assert.isString(number2Byte(23341122));
    });
    it('Should return 22.26MB', () => {
        chai.assert.equal(number2Byte(23341122), '22.26MB');
    });
});