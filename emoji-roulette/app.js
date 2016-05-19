//set default degree (360*5)
var degree = 1800;
var clicks = 0;

$(document).ready(function(){

//hide spin history on load
$(function(){
    $("#spin-history").hide();
    });

$("#spins").click( function(event){
		$(this).toggleClass("active");
		$("#setup").removeClass("active");
		$(".all-dropdowns").hide();
		$("#spin-history").show();
		});

$("#setup").click( function(event){
		$(this).toggleClass("active");
		$("#spins").removeClass("active");
		$(".all-dropdowns").show();
		$("#spin-history").hide();
		});

//on land, get the id of that wedge and append it to the history

$(".emoji_1").click( function(event){
	  console.log(this.id);
		document.getElementById("wedge_1").innerHTML = this.id;
		document.getElementById("dropdown_1").innerHTML = this.id + " | " + $(this).attr("data-description");
});

$(".emoji_2").click( function(event){
	  console.log(this.id);
		document.getElementById("wedge_2").innerHTML = this.id;
		document.getElementById("dropdown_2").innerHTML = this.id + " | " + $(this).attr("data-description");
});

$(".emoji_3").click( function(event){
	  console.log(this.id);
		document.getElementById("wedge_3").innerHTML = this.id;
		document.getElementById("dropdown_3").innerHTML = this.id + " | " + $(this).attr("data-description");
});

$(".emoji_4").click( function(event){
	  console.log(this.id);
		document.getElementById("wedge_4").innerHTML = this.id;
		document.getElementById("dropdown_4").innerHTML = this.id + " | " + $(this).attr("data-description");
});

$(".emoji_5").click( function(event){
	  console.log(this.id);
		document.getElementById("wedge_5").innerHTML = this.id;
		document.getElementById("dropdown_5").innerHTML = this.id + " | " + $(this).attr("data-description");
});

$(".emoji_6").click( function(event){
	  console.log(this.id);
		document.getElementById("wedge_6").innerHTML = this.id;
		document.getElementById("dropdown_6").innerHTML = this.id + " | " + $(this).attr("data-description");
});

$(".emoji_7").click( function(event){
	  console.log(this.id);
		document.getElementById("wedge_7").innerHTML = this.id;
		document.getElementById("dropdown_7").innerHTML = this.id + " | " + $(this).attr("data-description");
});

$(".emoji_8").click( function(event){
	  console.log(this.id);
		document.getElementById("wedge_8").innerHTML = this.id;
		document.getElementById("dropdown_8").innerHTML = this.id + " | " + $(this).attr("data-description");
});



	/*WHEEL SPIN FUNCTION*/
	$('#spin').click(function(){
		clicks ++;

		var newDegree = degree*clicks;
		var extraDegree = Math.floor(Math.random() * (360)) + 1;
		totalDegree = newDegree+extraDegree;
		console.log(extraDegree);


		var wedge7CoorA = 22.5;
		var wedge7CoorB = 67.5;
		var wedge6CoorA = 67.5;
		var wedge6CoorB = 112.5;
		var wedge5CoorA = 112.5;
		var wedge5CoorB = 157.5;
		var wedge4CoorA = 157.5;
		var wedge4CoorB = 202.5;
		var wedge3CoorA = 202.5;
		var wedge3CoorB = 247.5;
		var wedge2CoorA = 247.5;
		var wedge2CoorB = 292.5;
		var wedge1CoorA = 292.5;
		var wedge1CoorB = 337.5;


		function emojiAppender() {
			if (extraDegree > wedge7CoorA && extraDegree < wedge7CoorB) {
				console.log($('#wedge_7').html());
				setTimeout(function(){
					$("#spin-history").append($('#wedge_7').html() + ', ');
				},6000)
			}

			else if (extraDegree > wedge6CoorA && extraDegree < wedge6CoorB) {
				console.log($('#wedge_6').html());
				setTimeout(function(){
					$("#spin-history").append($('#wedge_6').html() + ', ');
				},6000)
			}

			else if (extraDegree > wedge5CoorA && extraDegree < wedge5CoorB) {
				console.log($('#wedge_5').html());
				setTimeout(function(){
					$("#spin-history").append($('#wedge_5').html() + ', ');
				},6000)
			}

			else if (extraDegree > wedge4CoorA && extraDegree < wedge4CoorB) {
				console.log($('#wedge_4').html());
				setTimeout(function(){
					$("#spin-history").append($('#wedge_4').html() + ', ');
				},6000)
			}

			else if (extraDegree > wedge3CoorA && extraDegree < wedge3CoorB) {
				console.log($('#wedge_3').html());
				setTimeout(function(){
					$("#spin-history").append($('#wedge_3').html() + ', ');
				},6000)
			}

			else if (extraDegree > wedge2CoorA && extraDegree < wedge2CoorB) {
				console.log($('#wedge_2').html());
				setTimeout(function(){
					$("#spin-history").append($('#wedge_2').html() + ', ');
				},6000)
			}

			else if (extraDegree > wedge1CoorA && extraDegree < wedge1CoorB) {
				console.log($('#wedge_1').html());
				setTimeout(function(){
					$("#spin-history").append($('#wedge_1').html() + ', ');
				},6000)
			}

			else {
				console.log($('#wedge_8').html());
				setTimeout(function(){
					$("#spin-history").append($('#wedge_8').html() + ', ');
				},6000)
			}
			console.log(extraDegree);
		}

		emojiAppender();

		$('#wheel .sec').each(function(){
			var t = $(this);
			var noY = 0;

			var c = 0;
			var n = 700;
			var interval = setInterval(function () {
				c++;
				if (c === n) {
					clearInterval(interval);
				}

				var aoY = t.offset().top;
				$("#txt").html(aoY);

				if(aoY < 23.89){
					console.log('<<<<<<<<');
					$('#spin').addClass('spin');
					setTimeout(function () {
						$('#spin').removeClass('spin');
					}, 100);
				}
			}, 10);

			$('#inner-wheel').css({
				'transform' : 'rotate(' + totalDegree + 'deg)'
			});

			noY = t.offset().top;

		});
	});


});
