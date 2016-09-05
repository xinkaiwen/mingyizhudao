$(function(){
	var count=0;
	$(".cjwtmainright_main ul li ").hide();
	$(".cjwtmainright_main ul li ").eq(0).show();
	$(".cjwtmain_left>ul>li>ul").css({"display":"none"});
	$(".cjwtmain_left>ul>li>ul").eq(0).css({"display":"block"});
	$(".cjwtmain_left>ul>li>ul:first li").eq(0).css({"color":"#25AEA6"});

	$(".cjwtmain_left ul li ul li").click(function(){
		$(".cjwtmain_left>ul>li>ul li").css({"color":"#000"});
		$(this).css({"color":"#25AEA6"});
		var to = $(this).attr("class");
		$(".cjwtmainright_main ul li ").each(function(i){
			if ($(".cjwtmainright_main ul li ").eq(i).attr("id")==to) {
				$(".cjwtmainright_main ul li ").hide();
				$(this).show();
			}
		})
	})
	$(".cjwtmain_left>ul>li h1").click(function(){
		
		var t = $(this).next("ul").css("display");
		if (t==="none") {
			$(".cjwtmain_left>ul>li>ul").css({"display":"none"});
			$(this).next("ul").css({"display":"block"});
		}
		else if (t==="block") {
			$(".cjwtmain_left>ul>li>ul").css({"display":"none"});
			$(this).next("ul").css({"display":"none"});

		}
	})
})