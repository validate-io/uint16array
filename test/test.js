/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isUint16Array = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-uint16array', function tests() {

	it( 'should export a function', function test() {
		expect( isUint16Array ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var arr = new Uint16Array( 10 );

		assert.ok( isUint16Array( arr ) );
	});

	it( 'should negatively validate', function test() {
		var values = [
			'5',
			5,
			NaN,
			null,
			undefined,
			true,
			[],
			{},
			function(){},
			new Int8Array( 10 ),
			new Uint8ClampedArray( 10 ),
			new Uint8Array( 10 ),
			new Int16Array( 10 ),
			new Int32Array( 10 ),
			new Uint32Array( 10 ),
			new Float32Array( 10 ),
			new Float64Array( 10 ),
			new Array( 10 )
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( isUint16Array( values[i] ), values[i] );
		}
	});

});
