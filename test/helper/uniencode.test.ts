import chai from 'chai';
import { uniencode, } from '../../index';

describe('#uniencode Function', () => {
    it('Should return type of string', () => {
        chai.assert.isString(uniencode('www.baidu.com'));
    });
    it('Should return %2C', () => {
        chai.assert.equal(uniencode(','), '%2C');
    });
});