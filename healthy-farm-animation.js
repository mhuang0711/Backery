
$(document).ready(function(){

	//menu	
  	$("#menu-after").click(function(){
  		
  		if($('.menu').hasClass('open')) {
  			$(".menu").removeClass("open");
  			$('.menu.open').css('height', '350px');
  		} else {
  			$(".menu").addClass("open");
  			}		
  		});

  	$('.heading').click(function() {
		$('.heading').each(function(i) {
			if($(this).text() === $('.heading').eq(i).text()) {
				$(this).removeClass('open');
			}
		});
			$(this).addClass('open');

			var height, height2, that = $(this);

			$('.menu.open').css('height', '350px');

			setTimeout(function() {
 				height = that.parent().find('ul').height();
 				height2 = $('.menu.open').height();
				$('.menu.open').css('height' , height + height2);
			}, 1000);
		});
   

	//animation
	//$(".bottom-imgs li").hover(function(){
	//	var opacityval=$(this).find(".opacity-box").css("opacity");
	//	console.log(opacityval);
	//	if(opacityval==0){
	//	$(this).find(".opacity-box").css("opacity","0.7");
	//	$(this).find(".opacity-box p,span").animate({opacity:'1'},1000);
	//	$(this).find(".square").animate({opacity:'1',marginTop:'0px'},1000);
	//	$(this).find(".arrow").animate({opacity:'1',marginTop:'-15px'},1000);
	//}
	//  else{
	//  	$(this).find(".opacity-box").css("opacity","0");
	//  	$(this).find(".opacity-box p,span").css("opacity","0");
	//	$(this).find(".square").css( {"opacity":"0","margin-top":"-50px"} );
	//	$(this).find(".arrow").css( {"opacity":"0","margin-top":"20px"} );
	//  }
	//});

 });
