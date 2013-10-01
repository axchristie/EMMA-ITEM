$(document).ready(function(){

	//Display versioned TEI files in a container with ID #tei-1.
	//This example assumes that the container takes up the entire screen.

	$('#tei').data('teiDisplay', {
		xmlFile: 'data/barnes3.xml',
		annotations: 'data/annotations.json',
		highlights: 'data/annotations.json',
		fixFirst: false,
		//height: 300,
		//locs: 'a3,a4,a5',
		//witnesses: 'v4n8,v4n11',
		dev: false,
	});

	$('#tei').teiDisplay();	


	//Display versioned TEI files in a container with ID #tei-single.
	//This example assumes that the container exists in a column of text.

	$('#tei-single').data('teiDisplay', {
		xmlFile: 'data/barnes1.xml',
		fixFirst: true,
		fullscreen: false,
		height: 600,
		annotations: 'data/annotations1.json',
		highlights: 'data/annotations1.json',		
		//witnesses: 'v4n8,v4n11',
	});

	$('#tei-single').teiDisplay();		


	$('#t3').data('teiDisplay', {
		xmlFile: 'data/barnes.xml',
		fixFirst: true,
		fullscreen: false,
		height: 700,
		annotations: 'data/annotations1.json',
		highlights: 'data/annotations1.json',		
		//witnesses: 'v4n8,v4n11',
	});

	$('#t3').teiDisplay();		

})//onReady

