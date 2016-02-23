'use strict';

// MODULES //

var isObject = require( 'validate.io-object' );
var isBoolean = require( 'validate.io-boolean-primitive' );
var isString = require( 'validate.io-string-primitive' );


// VALIDATE //

/**
* FUNCTION: validate( opts, options )
*	Validates function options.
*
* @param {Object} opts - destination object 
* @param {Object} options - function options 
* @param {String} options.slug - public Github repository slug
* @param {String} options.file - filepath
* @param {Boolean} [options.cdn] - boolean indicating whether to return a CDN URL
* @returns {Error|Null} error object or null 
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'invalid input argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	opts.slug = options.slug;
	if ( !isString( opts.slug ) ) {
		return new TypeError( 'invalid option. `slug` option must be a primitive string. Option: `' + opts.slug + '`.' );
	}
	opts.file = options.file;
	if ( !isString( opts.file ) ) {
		return new TypeError( 'invalid option. `file` option must be a primitive string. Option: `' + opts.file + '`.' );
	}
	if ( options.hasOwnProperty( 'cdn' ) ) {
		opts.cdn = options.cdn;
		if ( !isBoolean( opts.cdn ) ) {
			return new TypeError( 'invalid option. `cdn` option must be a primitive boolean. Option: `' + opts.cdn + '`.' );
		}
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;