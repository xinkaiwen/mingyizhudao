$(function(){

	$(".zmyip2_left li").each(function(i){
			$(".zmyip2_left li").eq(i).css({"background-position":-i*130+"px"});
			$(".zmyip2_left .zmyip2_liuke").eq(0).css({"border":"1px solid #81C1CA"});
			$(".zmyip2_left .zmyip2_liuke").eq(1).css({"border":"1px solid #9582B6"});
			$(".zmyip2_left .zmyip2_liuke").eq(2).css({"border":"1px solid #F2B4BF"});
			$(".zmyip2_left .zmyip2_liuke").eq(3).css({"border":"1px solid #8FC07B"});
			$(".zmyip2_left .zmyip2_liuke").eq(4).css({"border":"1px solid #F18A2E"});
			$(".zmyip2_left .zmyip2_liuke").eq(5).css({"border":"1px solid #D55B81"});

		})
		$(".zmyip2_left .zmyip2_liuke").hide();
		$(".zmyip2_left .zmyip2_liuke").eq(0).show();
		$(".zmyip2_left li").mouseover(function(){
			var i = $(this).index();
			$(".zmyip2_left .zmyip2_liuke").hide();
			$(".zmyip2_left .zmyip2_liuke").eq(i).show();
		})
	var arr1=[];
		var arr2=[];
		$.ajax({
			type:"get",
			async:true,
			beforeSend:function(i){
				$(".zmyip3 ul").html("正在处理，请稍等...")
			},
			url:"https://xinkaiwen.github.io/doc/doc.json",
			dataType:'json',        
        	success:function(data,textStatus){
        		console.log(data);
        		$(".zmyip3 ul").html("")
        		$(data).each(function(i){
        			if (i<8) {

        				$("<li><a href=''><div><img src='../public/images/w1.jpg'><span class='doc_name'>"+data[i].name+"</span><span>"+data[i].zhicheng+"</span></div><span>"+data[i].yiyuan+"</span><span>"+data[i].keshi+"</span></a></li>").appendTo(".zmyip3 ul");
        				// $("").appendTo(".zmyip3 ul li").eq(i)
        			}
        		})
        		

        	}

		});		
})