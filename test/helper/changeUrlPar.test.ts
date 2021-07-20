import chai from 'chai';
import { changeUrlPar, } from '../../index';

describe('#changeUrlPar Function', () => {
    it('Should return type of string', () => {
        chai.assert.isString(changeUrlPar('www.baidu.com', 'a', '2'));
    });
    it('Should return www.baidu.com?a=2', () => {
        chai.assert.equal(changeUrlPar('www.baidu.com', 'a', '2'), 'www.baidu.com?a=2');
    });
    it('Should return www.baidu.com?a=3', () => {
        chai.assert.equal(changeUrlPar('www.baidu.com?a=2', 'a', '3'), 'www.baidu.com?a=3');
    });
});