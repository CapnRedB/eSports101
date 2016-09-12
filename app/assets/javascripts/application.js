// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts	,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
var toolTip = false;
$( document ).ready( function( e ) {
	$( '.gameDeck' ).on( 'click', function( e ) {
		if ( !toolTip ) {
			toolTip = true;
			console.log( "expand" );
			var newDiv = $( event.target ).clone();
			newDiv.addClass( 'toolTip' );
			newDiv.attr( 'id', 'toolTip' );
			$( '.gameDeck' ).append( newDiv );
			var fillSpace = $( '#t1Top' );
			newDiv.css( 'background-color', 'green' );
			newDiv.css( 'position', 'absolute' );
			var position = $( event.target ).position();
			//console.log( position );
			newDiv.css( 'left', position.left );
			newDiv.css( 'top', position.top );
			newDiv.css( 'z-index', 1 );
			newDiv.animate( {
				left: fillSpace.position().left + "px",
				top: fillSpace.position().top + "px",
				height: '200px',
				width: '1024px'
			}, 1000 );
		}
	} );

	$( '.gameDeck' ).mouseleave( function() {
		$( '#toolTip' ).remove();
		toolTip = false;
	} )

} )
