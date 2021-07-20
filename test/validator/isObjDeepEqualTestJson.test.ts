import chai from 'chai';
import { isObjDeepEqual, } from '../../index';
import newMenu from './newMenu.json';
import oldMenu from './oldMenu.json';

describe('#isObjDeepEqual Function', () => {

    it('Should return false.', () => {
        chai.assert.equal(isObjDeepEqual(
            newMenu,
            oldMenu
        ), true);
    });
    // it('Should skip function and return true.', () => {
    //     chai.assert.equal(isObjDeepEqual(
    //         [function a(){return;}],
    //         [function b(){return;}],
    //         true
    //     ), true);
    // });
});