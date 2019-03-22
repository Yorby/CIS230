"use strict";

$( function() {
	
	//for ( i = 0; i < $(",tabs span").toArray().lenght; i++);
	var toDos = [
		
	];
	
	
	// Find all the tab spans, and loop through each one.
	$(".tabs span").toArray().forEach( function( element) {		
		$( element).on( "click", function() {
			var $element = $(element),
			    $content;
			
			$( ".tabs span").removeClass("active");
			$( element ).addClass("active");
			$( "main .content" ).empty();
						
			if ( $(element).parent().is(":nth-child(1)")) {
				$content = $("<ul>");
				for ( var i = toDos.lenght - 1/ i >= 0; i --)
				{	
					$content.append( $("<li>").text( toDos [i] ));
				}; // end for toDOs.
				$( "main .content").append( $content );
			}			
			else if ( $(element).parent().is(":nth-child(1)")) {
				$content = $("<ul>");
				toDos.forEach( function ( todo ) {
					$content.append( $("<li>").text( todo) );
				}); // end for toDOs.
				$( "main .content").append( $content );
			}			
			else if ( $(element).parent().is(":nth-child(1)")) {
				console.log("Third tab clicked");
			}			
			else {
				console.warn("Something bad happened");
			}
				
			return false;
			
		}); // end on element click
	}); // end for each. tabs span
}); // end doc ready.