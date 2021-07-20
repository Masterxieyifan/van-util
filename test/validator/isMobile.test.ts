import chai from 'chai';
import { isMobile, } from '../../index';

describe('#isMobile Function', () => {
    it('Should return type of boolean', () => {
        chai.assert.isBoolean(isMobile('13250321111'));
    });
    it('Should return true', () => {
        chai.assert.equal(isMobile('13250321111'), true);
    });
});