var assert = require('assert');
describe('Array', function () {
	describe('#indexOf()', function () {
		it('should return -1 when the value is not present', function () {
			assert.equal(-1, [1, 2, 3].indexOf(4));
		});
	});
	describe('#length', function () {
		it('Should return 3 when array length is 3', function () {
			assert.equal(3, [1, 2, 3].length);
		});
	});
});