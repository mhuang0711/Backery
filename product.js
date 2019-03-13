$(document).ready(function(){

	//menu	
  	$("nav").click(function(){
  		
  			$("body").css("backgroundImage","url(home-menu.jpg)");
        $(".product").css("display","none");
        $(".background-img").css("display","block");
  			$(".menu-footer").css("display","block");
        $(".close").css("display","block");     
  			$(".border-line").fadeIn(3000);

  			$(".menu-footer label > span").click(function(){     
          $(".background-img").css("display","none");
          $(".menu-footer").css("display","none");
          $(".shop-address").css("display","block");
          $("nav").css("display","none");

        });

         $(".menu-footer > span").click(function(){     
          $(".background-img").css("display","none");
          $(".menu-footer").css("display","none");
          $(".contact").css("display","block");
          $("nav").css("display","none");

        });

  		});
  });