'use strict';

/**
* FUNCTION: url( opts )
*	Returns a RawGit URL.
*
* @param {Object} opts - function options
* @param {String} opts.protocol - HTTP protocol
* @param {String} opts.hostname - RawGit hostname
* @param {String} opts.slug - repository slug
* @param {String} opts.file - filepath
* @param {Boolean} opts.cdn - boolean indicating whether a resource should be delivered via a CDN
* @returns {String} RawGit URL
*/
function url( opts ) {
	var str = '';

	str += opts.protocol+'://';
	if ( opts.cdn ) {
		str += 'cdn.';
	}
	str += opts.hostname+'/';
	str += opts.slug+'/';
	str += opts.file;

	// e.g., https://cdn.rawgit.com/kgryte/rawgit-url/a9633f0dd2e3720dadedb965a30c999c2b0f8992/README.md
	return str;
} // end FUNCTION url()


// EXPORTS //

module.exports = url;
