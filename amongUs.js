var scores = {
	brown: 0,
	blue: 0,
	orange : 0,
	fuchsia : 0,
	bluegreen : 0,
	pink : 0,
	magenta : 0,
	purple : 0,
	red : 0,
	green : 0,	
	
}

// JSON

$(document).ready(
	function(){

		$("#p1div").click(
			function(){
				console.log("brown");
				scores.brown++;
				$("#p1vote").html("("+scores.brown+")");
			  
			}
		);
		$("#p2div").click(
			function(){
				console.log("blue");
				scores.blue++;
				$("#p2vote").html("("+scores.blue+")");
			}
		);
		$("#p3div").click(
			function(){
				console.log("orange");
				scores.orange++;
				$("#p3vote").html("("+scores.orange+")");
			}
		);
		$("#p4div").click(
			function(){
				console.log("fuchsia");
				scores.fuchsia++;
				$("#p4vote").html("("+scores.fuchsia+")");
			}
		);
		$("#p5div").click(
			function(){
				console.log("bluegreen");
				scores.bluegreen++;
				$("#p5vote").html("("+scores.bluegreen+")");
			}
		);
		$("#p6div").click(
			function(){
				console.log("pink");
				scores.pink++;
				$("#p6vote").html("("+scores.pink+")");
			}
		);
		$("#p7div").click(
			function(){
				console.log("magenta");
				scores.magenta++;
				$("#p7vote").html("("+scores.magenta+")");
			}
		);
		$("#p8div").click(
			function(){
				console.log("purple");
				scores.purple++;
				$("#p8vote").html("("+scores.purple+")");
			}
		);
		$("#p9div").click(
			function(){
				console.log("red");
				scores.red++;
				$("#p9vote").html("("+scores.red+")");
			}
		);
		$("#p10div").click(
			function(){
				console.log("green");
				scores.green++;
				$("#p10vote").html("("+scores.green+")");
			}
		);

	}
);