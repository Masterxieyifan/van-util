import chai from 'chai';
import { calcDuration, } from '../../index';

describe('#calcDuration Function', () => {
    it('Should type of sting', () => {
        chai.assert.isString(calcDuration(7482220));
    });

    it('Should return 2\'4\'\'42', () => {
        chai.assert.equal(calcDuration(7482220), '2\'4\'\'42');
    });
});