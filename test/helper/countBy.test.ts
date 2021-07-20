/*
 * @Descripttion: countBy
 * @Author: 曾令涌
 * @Date: 2021-01-28 10:50:36
 * @LastEditTime: 2021-04-16 10:20:04
 */

import chai from 'chai';
import { countBy, } from '../../index';

describe('#countBy Function', () => {

    it('Should return type of object', () => {
        chai
            .expect(countBy([]))
            .to.be.an('object')
            .that.is.empty;

        chai
            .expect(countBy([1, 2]))
            .to.be.an('object');

        chai
            .expect(countBy([], Math.floor))
            .to.be.an('object')
            .that.is.empty;

        chai
            .expect(countBy([], 'length'))
            .to.be.an('object')
            .that.is.empty;

        chai
            .expect(countBy([1, 2], Math.floor))
            .to.be.an('object');

        chai
            .expect(countBy([1, 2], 'length'))
            .to.be.an('object');
    });

    it('Should throw TypeError when iteratee is not function or not property string', () => {
        chai.assert.throws(
            () => countBy([1, 2], {} as string),
            TypeError,
            'Expected iteratee is a function or property string'
        );
    });

    it('Should return the right result', () => {
        chai
            .expect(countBy([1, 2, 1]))
            .to.deep.equal(
                {
                    '1': 2,
                    '2': 1,
                }
            );

        chai
            .expect(countBy([6.1, 4.2, 6.3], Math.floor))
            .to.deep.equal(
                {
                    '4': 1,
                    '6': 2,
                }
            );

        chai
            .expect(countBy(['one', 'two', 'three'], 'length'))
            .to.deep.equal(
                {
                    '3': 2,
                    '5': 1,
                }
            );

        chai
            .expect(countBy([{ age: 18, }, { age: 30, }, { age: 18, }], 'age'))
            .to.deep.equal(
                {
                    '18': 2,
                    '30': 1,
                }
            );
    });
});