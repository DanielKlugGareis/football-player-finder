import { getAge } from '../constants';

describe('constant functions', () => {
    it('should get age given a string date', () => {
        expect(getAge('1993-05-13')).toEqual(25);
    });
});