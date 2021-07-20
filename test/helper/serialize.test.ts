import chai from 'chai';
import { serialize, } from '../../index';

describe('#serialize Function', () => {
    it('Should return type of string', () => {
        chai.assert.isString(serialize({
            isEdit: true,
            canCancel: false,
        })
        );
    });
    it('Should return isEdit=true&canCancel=false', () => {
        chai.assert.equal(serialize({
            isEdit: true,
            canCancel: false,
        }),
        'isEdit=true&canCancel=false');
    });
});