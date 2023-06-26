const Ship = require('./components/ship');
const Gameboard = require('./components/gameboard');
const DOM = require('./components/dom');

function main() {
	const dom = DOM();
	dom.play();
}

window.addEventListener('load', main);
