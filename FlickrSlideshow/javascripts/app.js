"use strict"
	var main = function() {
	var url = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?&tags=dogs&format=json";
	
	$.getJSON( url, function( flickrSlideshowResponse ) {
		console.log( flickrSlideshowResponse );
		
		flickrSlideshowResponse.items.forEach( function( photo ) {
			console.log( photo.media.m );
			var $img = $("<img>");
			var $desc = $("<p>");
			
			$img.attr("src", photo.media.m );
			$img.attr("alt", photo.title );
			
			$desc.html( photo.description );
			
			$("main .photos").append( $img, $desc );
			
		});
		
	});
	
}; //end main

$(function() {
	main();	
});

// set time 
$("FlickrSlideshow > div:gt(0)").hide();

setInterval(function() {
	$('#FlickrSlideshow > div:first')
	.fadeOut(2000)
	.next()
	.fadeIn(2000)
	.end()
	.appendTo('#FlickrSlideshow');
}, 3000);
