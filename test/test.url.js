'use strict';

// MODULES //

var tape = require( 'tape' );
var url = require( './../lib/url.js' );


// SETUP //

function setup() {
	return {
		'protocol': 'https',
		'hostname': 'rawgit.com',
		'slug': 'kgryte/utils-deep-pluck/master',
		'file': 'README.md',
		'cdn': true
	};
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof url, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a string', function test( t ) {
	var u = url( setup() );
	t.equal( typeof u, 'string', 'returns a string' );
	t.end();
});

tape( 'the function returns a RawGit URL (cdn)', function test( t ) {
	var expected;
	var actual;

	expected = 'https://cdn.rawgit.com/kgryte/utils-deep-pluck/master/README.md';
	actual = url( setup() );

	t.equal( actual, expected, 'returns a RawGit URL' );
	t.end();
});

tape( 'the function returns a RawGit URL (no cdn)', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = setup();
	opts.cdn = false;

	expected = 'https://rawgit.com/kgryte/utils-deep-pluck/master/README.md';
	actual = url( opts );

	t.equal( actual, expected, 'returns a RawGit URL' );
	t.end();
});
