$(document).ready(function(){

	/****Slider for element***/
	$(".dop-arr-left").click(function(){
		if($(this).attr("data-disabled")=="disabled")
			return;
		$(this).attr("data-disabled","disabled");
		var pos = parseInt($(".element-dop-pic-b").css("left"));
				
		if(pos < 0){
			$(this).parents(".element-dop-pic-wrap").find(".element-dop-pic-b").animate({left:"+=152px"},500,function(){
				$(".dop-arr").removeAttr("data-disabled");
				$(".dop-arr-right").removeClass("passive");
				var pos = parseInt($(".element-dop-pic-b").css("left"));
				if(pos >= 0){
					$(".dop-arr-left").addClass("passive");
				}
			});

		}
	});
	$(".dop-arr-right").click(function(){
		if($(this).attr("data-disabled")=="disabled")
			return;
		$(this).attr("data-disabled","disabled");
		var off1 = $(".element-dop-pic-wrap").offset();
		var w1 = $(".element-dop-pic-wrap").width();
		var x1 = off1.left;
		var x2 = off1.left + w1;
		var off2 = $(".element-dop-pic-b .element-dop-pic-i:last").offset();
		var w2 = $(".element-dop-pic-b .element-dop-pic-i:last").width();
		var x3 = off2.left + w2;
		if(x2 < x3){
			$(this).parents(".element-dop-pic-wrap").find(".element-dop-pic-b").animate({left:"-=152px"},500,function(){
				$(".dop-arr").removeAttr("data-disabled");
				$(".dop-arr-left").removeClass("passive");
				var off1 = $(".element-dop-pic-wrap").offset();
				var w1 = $(".element-dop-pic-wrap").width();
				var x1 = off1.left;
				var x2 = off1.left + w1;
				var off2 = $(".element-dop-pic-b .element-dop-pic-i:last").offset();
				var w2 = $(".element-dop-pic-b .element-dop-pic-i:last").width();
				var x3 = off2.left + w2;
				if(x2 >= x3){
					$(".dop-arr-right").addClass("passive");
					
				}
			});
		}
	});
	/***************/

});