import sut from './DOMChanger.js';
// import fs from 'fs';
// import path from 'path';

// const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('iChangeDOM', function() {
	beforeEach(() => {
		// document.documentElement.innerHTML = html.toString();

		// лучше сконструировать только то, что нам надо
		document.body.innerHTML = `
    	<h1>Test</h1>
  	`;
		// console.log(document.body.innerHtml);
	});

	afterEach(() => {
		// restore the original func after test
		jest.resetModules();
	});

	it('changes DOM', function() {
		sut();
		expect(document.querySelector('h1').textContent).toEqual('new text');
	});
});
