'use strict';

var rawgit = require( './../lib' );

var opts = {
	'cdn': true,
	'slug': 'kgryte/rawgit-url/a9633f0dd2e3720dadedb965a30c999c2b0f8992',
	'file': 'README.md'
};

var url = rawgit( opts );

console.log( url );
// returns 'https://cdn.rawgit.com/kgryte/rawgit-url/a9633f0dd2e3720dadedb965a30c999c2b0f8992/README.md'