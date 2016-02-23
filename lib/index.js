'use strict';

// MODULES //

var validate = require( './validate.js' );


// RAWGIT URL //

/**
* FUNCTION: rawgit( options )
*	Returns a RawGit URL for a file hosted in a public Github repository.
*
* @param {Object} options - function options
* @returns {String} RawGit URL
*/
function rawgit( options ) {
	var opts;
	var err;

	opts = {};
	err = validate( opts, options );
	if ( err ) {
		throw err;
	}
	return '';
} // end FUNCTION rawgit()


// EXPORTS //

module.exports = rawgit;
