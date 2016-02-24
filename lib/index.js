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
* @param {String} options.slug - public Github repository slug
* @param {String} options.file - filepath
* @param {Boolean} [options.cdn=true] - boolean indicating whether to return a CDN URL
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

	// Remove a `./` prefix, if present:
	opts.file = opts.file.replace( /^\.\//, '' );

	return url( opts );
} // end FUNCTION rawgit()


// EXPORTS //

module.exports = rawgit;
