"use strict"

$( function() {
	console.log("Getting Here!");
	
	var data = 
	{	
		"players":
		[
			{	"FirstName" : "Ryan",
				"LastName" : "DesRoches",
				"age" :40,
				"dateJoined": "May 1, 2000",
				"accountHolder": true
			},
			{
				"FirstName" : "Ryan",
				"LastName" : "DesRoches",
				"age" :6,
				"dateJoined": "May 1, 2005"
			},
			{
				"FirstName" : "Ryan",
				"LastName" : "DesRoches",
				"age" :40,
				"dateJoined": "May 1, 2003"
			}
		]
	};
	/*
	<firstName>
		Ryan
	</firstName>
	*/
	data.players.forEach( function( foo ) {
		console.log( "Players = " + foo.firstName + " " + foo.lastName + " age: " + foo.age );
		
		if ( foo.accountHolder ) {
			console.log( "Account Holder is " + foo.firstName );
		}	
	});

	
});