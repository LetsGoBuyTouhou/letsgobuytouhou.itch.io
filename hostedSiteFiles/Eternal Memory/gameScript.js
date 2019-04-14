// JavaScript Document

var kaguya= $("#kaguya");
var textbox = $(".textbox");
var kana = $(".kana");
var pInfo = $(".pInfo");
var activeKana = $(".activeGhost");
var dia = $(".dia");
var pCheck = $(document).scrollLeft();


       

$(document).keydown(function(e) {
        console.log(e.keyCode);
        if (e.keyCode == 37){kaguya.attr('src','assets/sprites/Kaguya_back.gif');}
		
		else if (e.keyCode == 39)	
        {kaguya.attr("src", 'assets/sprites/Kaguya_forward.gif');}
	
		var pCheck = $(document).scrollLeft();
		
		pInfo.text("position:" + pCheck);
	});
	


    var dialogue_up = function(){ textbox.addClass("activeBox");textbox.removeClass("inactiveBox"); textbox.animate({top:-250}, {duration: 100}); textbox.animate({opacity:"1"}, {duration: 300});}
	
    var dialogue_down = function () {textbox.addClass("inactiveBox"); textbox.removeClass("activeBox");textbox.animate({top: 400}, {duration: 300});textbox.animate({opacity:"1"}, {duration: 300});}
	
	var kaguyaDia = function () {textbox.addClass("H"); textbox.removeClass("A");}
		
	var kanaDia = function () {textbox.addClass("A"); textbox.removeClass("H");}
  
  	kana.click(dialogue_up);
   

