'use strict';

// MODULES //

var copy = require( 'utils-copy' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );
var url = require( './url.js' );


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

	opts = copy( defaults );
	err = validate( opts, options );
	if ( err ) {
		throw err;
	}
	// Remove any dangling `/`:
	opts.slug = opts.slug.replace( /\/$/, '' );
	
	return url( opts );
} // end FUNCTION rawgit()


// EXPORTS //

module.exports = rawgit;
