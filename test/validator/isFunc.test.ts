import chai from 'chai';
import { isString, isNumber, isBoolean, isFunction, isSymbol, isObject, isArray, isDate, } from '../../index';

describe('Test isFunc', () => {

    describe('#isString Function', () => {
        it('Should return type of boolean', () => {
            chai.assert.isBoolean(isString('13250321111'));
        });
        it('Should return true', () => {
            chai.assert.equal(isString('13250321111'), true);
        });
        it('Should return false', () => {
            chai.assert.equal(isString(1234), false);
        });
    });

    describe('#isNumber Function', () => {
        it('Should return type of boolean', () => {
            chai.assert.isBoolean(isNumber('13250321111'));
        });
        it('Should return true', () => {
            chai.assert.equal(isNumber(23123), true);
        });
        it('Should return false', () => {
            chai.assert.equal(isNumber('1234'), false);
        });
    });

    describe('#isBoolean Function', () => {
        it('Should return type of boolean', () => {
            chai.assert.isBoolean(isBoolean('13250321111'));
        });
        it('Should return true', () => {
            chai.assert.equal(isBoolean(true), true);
        });
        it('Should return false', () => {
            chai.assert.equal(isBoolean('1234'), false);
        });
    });

    describe('#isFunction Function', () => {
        it('Should return type of boolean', () => {
            chai.assert.isBoolean(isFunction('13250321111'));
        });
        it('Should return true', () => {
            chai.assert.equal(isFunction(chai.assert.equal), true);
        });
        it('Should return false', () => {
            chai.assert.equal(isFunction('1234'), false);
        });
    });

    describe('#isSymbol Function', () => {
        it('Should return type of boolean', () => {
            chai.assert.isBoolean(isSymbol('13250321111'));
        });
        it('Should return true', () => {
            chai.assert.equal(isSymbol(Symbol('test')), true);
        });
        it('Should return false', () => {
            chai.assert.equal(isSymbol('1234'), false);
        });
    });

    describe('#isObject Function', () => {
        it('Should return type of boolean', () => {
            chai.assert.isBoolean(isObject('13250321111'));
        });
        it('Should return true', () => {
            chai.assert.equal(isObject({ a: 2, }), true);
        });
        it('Should return false', () => {
            chai.assert.equal(isObject('1234'), false);
        });
    });

    describe('#isArray Function', () => {
        it('Should return type of boolean', () => {
            chai.assert.isBoolean(isArray('13250321111'));
        });
        it('Should return true', () => {
            chai.assert.equal(isArray([1, 2, 3, 4]), true);
        });
        it('Should return false', () => {
            chai.assert.equal(isArray('1234'), false);
        });
    });

    describe('#isDate Function', () => {
        it('Should return type of boolean', () => {
            chai.assert.isBoolean(isDate('13250321111'));
        });
        it('Should return true', () => {
            chai.assert.equal(isDate(new Date()), true);
        });
        it('Should return false', () => {
            chai.assert.equal(isDate('1234'), false);
        });
    });
});