import assert from 'assert';
import jsdom from 'mocha-jsdom';
import { SimpleFormCreatorWrapper } from '../src/index.js';

describe('Simple Form Creator', function () {
	jsdom();

	it('should create an expected DOM node', function () {
		const simpleform = SimpleFormCreatorWrapper({ 'formId': 'randomId' });
		assert.equal((simpleform.create()).outerHTML, '<form id="randomId" action="" method="post"></form>');
	});

	it('should return a string', function () {
		const simpleform = SimpleFormCreatorWrapper({});
		assert.equal(typeof simpleform.getRandomFormId(), 'string');
	});
});
