$(document).ready(function(){

	//menu	
  	$("nav").click(function(){
  		
  		//if($('.menu').hasClass('open')) {
  			$("body").css("backgroundImage","url(home-menu.jpg)");
        $(".story-page").css("display","none");
        $(".background-img").css("display","block");
  			$(".menu-footer").css("display","block");
        $(".close").css("display","block");
  			//$(".background-img").hover(function(){         -----unfinished------
  				$(".border-line").fadeIn(3000);
        
        $(".menu-footer label > span").click(function(){     //----shop-address----
          $(".background-img").css("display","none");
          $(".menu-footer").css("display","none");
          $(".shop-address").css("display","block");
          $("nav").css("display","none");

        });

        $(".menu-footer > span").click(function(){     //----shop-address----
          $(".background-img").css("display","none");
          $(".menu-footer").css("display","none");
          $(".contact").css("display","block");
          $("nav").css("display","none");

        });

  		});


  });