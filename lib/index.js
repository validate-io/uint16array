'use strict';

// FUNCTIONS //

var isStr = Object.prototype.toString;


// IS UINT16ARRAY //

/**
* FUNCTION: isUint16Array( value )
*	Validates if a value is an Uint16Array.
*
* @param {*} value - value to validate
* @returns {Boolean} boolean indicating if a value is an Uint16Array
*/
function isUint16Array( value ) {
	return isStr.call( value ) === '[object Uint16Array]';
} // end FUNCTION isUint16Array()


// EXPORTS //

module.exports = isUint16Array;
