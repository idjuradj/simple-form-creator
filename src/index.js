'use strict';

import { forOwn } from 'lodash';

/**
 * Class SimpleFormCreator
 */
class SimpleFormCreator {

	/**
	 * @param {Object} options - options object for form
	 * @returns {void}
	 */
	constructor(options) {
		this.options = options;
	}


	/**
	 *
	 * @method createRandomFormId
	 * @description Creates a pseudo random form id
	 *
	 * @returns {string} field - populated field
	 */
	createRandomFormId() {
		const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		let formId = '';

		for (let i = 0; i < 5; i++) {
			formId += LETTERS.charAt(Math.floor(Math.random() * LETTERS.length));
		}

		return formId;
	}

	/**
	 *
	 * @method createHiddenField
	 * @description creates a hidden input field from the provided values
	 *
	 * @param {Object} fieldDataKey - form object to be populated
	 * @param {Object} fieldDataValue - form object to be populated
	 * @returns {Object} field - populated field
	 */
	createHiddenField(fieldDataKey, fieldDataValue) {
		const hiddenField = document.createElement('input');
		hiddenField.setAttribute('type', 'hidden');
		hiddenField.setAttribute('name', fieldDataKey);
		hiddenField.setAttribute('value', fieldDataValue);

		return hiddenField;
	}

	/**
	 *
	 * @method createSubmitButton
	 * @description creates a submit button, because the form needs one to work :)
	 *
	 * @returns {Object} submitButton - submit button
	 */
	createSubmitButton() {
		const submitButton = document.createElement('input');
		submitButton.setAttribute('type', 'submit');

		return submitButton;
	}

	/**
	 *
	 * @method populateForm
	 * @description populates the form with contect from this.options.formData
	 *
	 * @param {Object} form - form object to be populated
	 * @param {Object} formDataKey - object key
	 * @param {Object} formDataValue - object val
	 * @returns {Object} form - populated form
	 */
	populateForm(form, formDataKey, formDataValue) {
		if (formDataValue instanceof Array) {
			formDataValue.forEach((formDataValueItem, index) => {
				this.populateForm(form, `${formDataKey}[${index}]`, formDataValueItem);
			});
		} else if (typeof formDataValue === 'object') {
			forOwn(formDataValue, (formDataValueItem, key) => {
				this.populateForm(form, `${formDataKey}[${key}]`, formDataValueItem);
			});
		} else {
			form.appendChild(this.createHiddenField(formDataKey, formDataValue));
		}
	}

	/**
	 *
	 * @method populateForm
	 * @description populates the form with contect from this.options.formData
	 *
	 * @param {Object} form - form object to be populated
	 * @returns {Object} form - populated form
	 */
	setAttributes(form) {
		const method = this.options.method || 'post';
		const action = this.options.action || '';
		const formId = this.options.formId || this.createRandomFormId();
		const style = this.options.style || '';

		form.setAttribute('id', formId);
		form.setAttribute('action', action);
		form.setAttribute('method', method);
		form.setAttribute('style', style);
	}

	/**
	 *
	 * @method create
	 * @description Creates the form
	 *
	 * @returns {Object} form - populated form
	 */
	create() {
		const form = document.createElement('form');

		const formData = this.options.formData || {};

		this.setAttributes(form);

		forOwn(formData, (formDataValue, formDataKey) => {
			this.populateForm(form, formDataKey, formDataValue);
		});

		form.appendChild(this.createSubmitButton());

		return form;
	}

}

const simpleFormCreator = (options) => {
	const instance = new SimpleFormCreator(options);
	return instance.create();
};

export default simpleFormCreator;

