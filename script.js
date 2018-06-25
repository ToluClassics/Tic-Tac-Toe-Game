$(document).ready(function(){
	var x = 'X';
	var o = 'O';
	var turns = 0;
	// different spots
	var spot1= $("#spot1");
	var spot2= $("#spot2");
	var spot3= $("#spot3");
	var spot4= $("#spot4");
	var spot5= $("#spot5");
	var spot6= $("#spot6");
	var spot7= $("#spot7");
	var spot8= $("#spot8");
	var spot9= $("#spot9");

	$(".board li").on("click", function(){
		if (spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
			spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
			spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
			spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
			spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
			spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o') ||
			spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
			spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ){

			alert("winner: 0");
			$(".board li").text("+");
			$(".board li").removeClass('disable');
			$(".board li").removeClass('o');
			$(".board li").removeClass('x');

		}else if (spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') ||
			spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
			spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
			spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
			spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
			spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x') ||
			spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
			spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ){

			alert("winner: x");
			$(".board li").text("+");
			$(".board li").removeClass('disable');
			$(".board li").removeClass('o');
			$(".board li").removeClass('x');
		
		}else if (turns==8) {
			alert("Tie Game");
			$(".board li").text("+");
			$(".board li").removeClass('disable');
			$(".board li").removeClass('o');
			$(".board li").removeClass('x');
			
		}else if ($(this).hasClass('disable')) {
			alert('this space has been filled');
		}

		else if(turns%2 == 0){
				turns++;
				$(this).text(o);
				$(this).addClass('disable o');
				if (spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
			spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
			spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
			spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
			spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
			spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o') ||
			spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
			spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o')){

			alert("winner: 0");
			turns = 0;
			}
		}else{

			turns++;
				$(this).text(x);
				$(this).addClass('disable x');

				if (spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') ||
			spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
			spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
			spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
			spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
			spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x') ||
			spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
			spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ){

			alert("winner: x");
			turns = 0;
		}
		}
	})
	// reset
	$('#reset').on('click',function(){

		alert("New Game");
			$(".board li").text("+");
			$(".board li").removeClass('disable');
			$(".board li").removeClass('o');
			$(".board li").removeClass('x');
			turns = 0;
	})
})