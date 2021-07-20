import { decimalNumber, } from '../../index';
import chai from 'chai';

describe('#decimalNumber Function', () => {
    it('Should keep two number of decimal', () => {
        chai.assert.equal(decimalNumber(10056.134), 10056.13);
    });
});