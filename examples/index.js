'use strict';

var isUint16Array = require( './../lib' );

console.log( isUint16Array( new Uint16Array( 10 ) ) );
// returns true

console.log( isUint16Array( new Int8Array( 10 ) ) );
// returns false

console.log( isUint16Array( new Uint8Array( 10 ) ) );
// returns false

console.log( isUint16Array( new Uint8ClampedArray( 10 ) ) );
// returns false

console.log( isUint16Array( new Int16Array( 10 ) ) );
// returns false

console.log( isUint16Array( new Int32Array( 10 ) ) );
// returns false

console.log( isUint16Array( new Uint32Array( 10 ) ) );
// returns false

console.log( isUint16Array( new Float32Array( 10 ) ) );
// returns false

console.log( isUint16Array( new Float64Array( 10 ) ) );
// returns false

console.log( isUint16Array( new Array( 10 ) ) );
// returns false

console.log( isUint16Array( {} ) );
// returns false

console.log( isUint16Array( null ) );
// returns false
