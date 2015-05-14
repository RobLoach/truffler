'use strict';

var sinon = require('sinon');

var phantom = module.exports = {
	create: sinon.stub(),
	mockBrowser: {
		addCookie: sinon.stub(),
		createPage: sinon.stub(),
		exit: sinon.stub()
	},
	mockPage: {
		open: sinon.stub(),
		set: sinon.stub()
	}
};

phantom.create.yieldsAsync(phantom.mockBrowser);
phantom.mockBrowser.createPage.yieldsAsync(phantom.mockPage);
phantom.mockPage.open.yieldsAsync('success');
