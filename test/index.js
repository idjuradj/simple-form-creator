import assert from 'assert';
import jsdom from 'mocha-jsdom';
import simpleFormCreator from '../src/index.js';

describe('Simple Form Creator', function () {
	jsdom();

	it('should create an expected DOM node', function () {
		const simpleform = simpleFormCreator({ 'formId': 'randomId' });
		assert.equal(
			simpleform.outerHTML,
			'<form id="randomId" action="" method="post" style=""><input type="submit"></form>'
		);
	});

	it('should have an id attribute', function () {
		const simpleform = simpleFormCreator({});
		assert.equal(typeof simpleform.getAttribute('id'), 'string');
	});

	it('should have an action attribute', function () {
		const simpleform = simpleFormCreator({});
		assert.equal(typeof simpleform.getAttribute('action'), 'string');
	});

	it('should have a method attribute', function () {
		const simpleform = simpleFormCreator({});
		assert.equal(typeof simpleform.getAttribute('method'), 'string');
	});
});
