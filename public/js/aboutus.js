$(function(){
	$(".aboutus_main").hide();
	$(".aboutus_main").eq(0).show();
	$(".aboutus_head li").eq(0).css({"color":"#5ECDDD"})
	$(".aboutus_head li").click(function(){
		$(".aboutus_head li").css({"color":"#686868"})
		$(this).css({"color":"#5ECDDD"})
		var i = $(this).index();
		alert(i);
		$(".aboutus_main").hide();
		$(".aboutus_main").eq(i).show();
	})


	

})