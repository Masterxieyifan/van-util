import chai from 'chai';
import { isURL, } from '../../index';

describe('#isURL Function', () => {
    it('Should return type of boolean', () => {
        chai.assert.isBoolean(isURL('www.baidu.com'));
    });
    it('Should return true', () => {
        chai.assert.equal(isURL('http://www.baidu.com'), true);
    });
});