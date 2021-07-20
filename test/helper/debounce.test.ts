import chai from 'chai';
import { debounce, } from '../../index';

describe('#debounce Function', () => {
    it('Should debonce a function', (done) => {
        let callCount = 0;
        const debouncedFn = debounce(function(value) {
            ++callCount;
            return value;
        }, 32);

        const results = [debouncedFn(), debouncedFn(), debouncedFn()];
        chai.expect(results).to.deep.equal([undefined, undefined, undefined]);
        chai.expect(callCount).to.equal(0);

        setTimeout(function() {
            chai.expect(callCount).to.equal(1);
            done();
        }, 128);
    });
});