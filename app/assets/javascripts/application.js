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
var t1Champs = [ 'Gangplank', 'Gragas', 'Syndra', 'Sivir', 'Braum' ];
var t2Champs = [ 'Riven', 'RekSai', 'Leblanc', 'Jhin', 'Trundle' ];
var toolTip = false;
$( document ).ready( function( e ) {
	$( '#t1Top' ).css( 'background', 'url(http://ddragon.leagueoflegends.com/cdn/6.4.1/img/champion/' + t1Champs[ 0 ] + '.png ) 0 0/100% 100% no-repeat' );
	$( '#t1Jung' ).css( 'background', 'url(http://ddragon.leagueoflegends.com/cdn/6.4.1/img/champion/' + t1Champs[ 1 ] + '.png ) 0 0/100% 100%' );
	$( '#t1Mid' ).css( 'background', 'url(http://ddragon.leagueoflegends.com/cdn/6.4.1/img/champion/' + t1Champs[ 2 ] + '.png ) 0 0/100% 100%' );
	$( '#t1AD' ).css( 'background', 'url(http://ddragon.leagueoflegends.com/cdn/6.4.1/img/champion/' + t1Champs[ 3 ] + '.png ) 0 0/100% 100%' );
	$( '#t1Sup' ).css( 'background', 'url(http://ddragon.leagueoflegends.com/cdn/6.4.1/img/champion/' + t1Champs[ 4 ] + '.png ) 0 0/100% 100%' );
	$( '#t2Top' ).css( 'background', 'url(http://ddragon.leagueoflegends.com/cdn/6.4.1/img/champion/' + t2Champs[ 0 ] + '.png ) 0 0/100% 100% no-repeat' );
	$( '#t2Jung' ).css( 'background', 'url(http://ddragon.leagueoflegends.com/cdn/6.4.1/img/champion/' + t2Champs[ 1 ] + '.png ) 0 0/100% 100%' );
	$( '#t2Mid' ).css( 'background', 'url(http://ddragon.leagueoflegends.com/cdn/6.4.1/img/champion/' + t2Champs[ 2 ] + '.png ) 0 0/100% 100%' );
	$( '#t2AD' ).css( 'background', 'url(http://ddragon.leagueoflegends.com/cdn/6.4.1/img/champion/' + t2Champs[ 3 ] + '.png ) 0 0/100% 100%' );
	$( '#t2Sup' ).css( 'background', 'url(http://ddragon.leagueoflegends.com/cdn/6.4.1/img/champion/' + t2Champs[ 4 ] + '.png ) 0 0/100% 100%' );
	event.preventDefault();
	$( '.gameDeck' ).on( 'click', function( e ) {
		if ( $( event.target ).hasClass( 'gameNode2' ) || $( event.target ).hasClass( 'gameNode1' ) ) {
			if ( !toolTip ) {
				toolTip = true;
				console.log( "expand" );
				var newDiv = $( event.target ).clone();
				newDiv.addClass( 'toolTip' );
				newDiv.attr( 'id', 'toolTip' );
				$( '.gameDeck' ).append( newDiv );
				var fillSpace = $( '#t1Top' );
				if ( $( event.target ).hasClass( 'gameNode2' ) ) {
					newDiv.css( 'background', '#A44A3F' );
				}
				if ( $( event.target ).hasClass( 'gameNode1' ) ) {
					newDiv.css( 'background', '#08415C' );
				}
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
					width: $( '.gameDeck' ).width()
				}, 1000 );
			}
		}
	} );

	$( '.gameDeck' ).mouseleave( function() {
		$( '#toolTip' ).remove();
		toolTip = false;
	} )

} )
