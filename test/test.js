'use strict';

// MODULES //

var tape = require( 'tape' );
var rawgit = require( './../lib' );


// SETUP //

function setup() {
	return {
		'slug': 'kgryte/utils-try-function/master',
		'file': 'README.md',
		'cdn': true
	};
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof rawgit, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an invalid `options` argument', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		undefined,
		true,
		[],
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws when provided ' + values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			rawgit( value );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		null,
		undefined,
		true,
		[],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws when provided ' + values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts = setup();
			opts.file = value;
			rawgit( opts );
		};
	}
});

tape( 'the function returns a RawGit URL (cdn)', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = setup();

	expected = 'https://cdn.rawgit.com/kgryte/utils-try-function/master/README.md';
	actual = rawgit( opts );

	t.equal( actual, expected, 'returns a RawGit URL' );
	t.end();
});

tape( 'the function returns a RawGit URL (no cdn)', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = setup();
	opts.cdn = false;

	expected = 'https://rawgit.com/kgryte/utils-try-function/master/README.md';
	actual = rawgit( opts );

	t.equal( actual, expected, 'returns a RawGit URL' );
	t.end();
});

tape( 'the function accepts slugs having a dangling `/` and file paths prefixed with `./`', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = setup();
	opts.slug += '/';
	opts.file = './' + opts.file;

	expected = 'https://cdn.rawgit.com/kgryte/utils-try-function/master/README.md';
	actual = rawgit( opts );

	t.equal( actual, expected, 'returns a RawGit URL' );
	t.end();
});
