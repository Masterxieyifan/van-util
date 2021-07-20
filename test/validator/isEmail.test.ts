import chai from 'chai';
import { isEmail, } from '../../index';

describe('#isEmail Function', () => {
    it('Should return type of boolean', () => {
        chai.assert.isBoolean(isEmail('yuancheng.cai@vantopgroup.com'));
    });
    it('Should return true', () => {
        chai.assert.equal(isEmail('yuancheng.cai@vantopgroup.com'), true);
    });
});