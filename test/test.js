'use strict';

// MODULES //

var tape = require( 'tape' );
var rawgit = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof rawgit, 'function', 'main export is a function' );
	t.end();
});
