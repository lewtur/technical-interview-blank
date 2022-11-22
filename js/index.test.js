const { test } = require('./index');

describe('index', () => {
    it('should run', () => {
        expect(test()).toEqual(1);
    });
});
