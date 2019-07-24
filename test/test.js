var dbjs = require( 'database-js' );
var driver = require( '../' );
var assert = require( 'assert' );

describe( 'database-js-msnodesqlv8', function () {

    // Change this line before testing:
    var connStr = 'database-js-msnodesqlv8://username:password@localhost/database'; 

    it( 'queries an existing table correctly', async function() {
        var conn;
        try {
            conn = new dbjs.Connection( connStr, driver );
        } catch ( err ) {
            assert.fail( err.message );
            return;
        }
        var st = conn.prepareStatement( 'SELECT * FROM states WHERE state = ?' );
        var data = await st.query( 'Dakota' );
        console.log( data );
    } );

} );