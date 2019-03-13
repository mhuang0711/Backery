$(document).ready(function(){

  	$("nav").click(function(){
  			$("body").css("backgroundImage","url(home-menu.jpg)");    //----menu----
  			$(".background-img p").css("display","none");
  			$(".background-img h2").css("fontFamily","ItalicRoman");
  			$(".background-img label").css("display","none");
  			$(".background-img > div").css("height","100px");
  			$(".menu-footer").css("display","block");
        $(".close").css("display","block");
  			$(".border-line").fadeIn(3000);	
        
  			$(".menu-footer label > span").click(function(){     //----shop address----
          $(".background-img").css("display","none");
          $(".menu-footer").css("display","none");
          $(".shop-address").css("display","block");
          $("nav").css("display","none");

        });

         $(".menu-footer > span").click(function(){     //----contact us----
          $(".background-img").css("display","none");
          $(".menu-footer").css("display","none");
          $(".contact").css("display","block");
          $("nav").css("display","none");

        });

  		});

		});