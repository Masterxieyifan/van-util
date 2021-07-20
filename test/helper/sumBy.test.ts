import chai from 'chai';
import { sumBy, } from '../../index';

describe('#sumBy Function', () => {

    const objects = [{ 'n': 4, }, { 'n': 2, }, { 'n': 8, }, { 'n': 6, }];

    it('Should return type of number: 0', () => {
        chai
            .expect(sumBy([]))
            .to.equal(0);
    });

    it('Should return type of number: 20', () => {
        chai
            .expect(sumBy(objects, 'n'))
            .to.equal(20);

        chai
            .expect(sumBy(objects, ({ n, }) => n))
            .to.equal(20);
    });

    it('Should return type of number: 5', () => {
        chai
            .expect(sumBy([[1, 2, 3], [1, 2]], 'length'))
            .to.equal(5);
    });

    it('Should return type of string: LiliMaggie', () => {
        chai
            .expect(sumBy([{ name: 'Lili', }, { name: 'Maggie', }], 'name'))
            .to.equal('LiliMaggie');
    });

    it('Should return type of undefined', () => {
        chai
            .expect(sumBy(objects, 'x'))
            .to.equal(undefined);
    });
});