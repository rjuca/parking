var express 	= require( 'express' ),
	path    	= require( 'path' ),
	app 		= express();

app.use( express.static( 'public' ) );

app.get( '/', function ( req, res ) {
  res.sendFile( path.join( __dirname + '/public/index.html' ) );
});

app.listen( 3000, function () {
  console.log( 'Parking app listening on port 3000!' );
});

