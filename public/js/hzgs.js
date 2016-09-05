$(function(){
	$.ajax({
			type:"get",
			// async:true,
			// beforeSend:function(i){
			// 	$(".zmyip3 ul").html("正在处理，请稍等...")
			// },
			url:"https://xinkaiwen.github.io/doc/hzgs.json",
			dataType:'json',        
        	success:function(data,textStatus){
        		console.log(data);
        		$(data).each(function(i){
        			$("<li><img src="+data[i].src+"><h4>"+data[i].jibingmingcheng+"</h4><p>"+data[i].jianjie+"</p><a href=''>查看详情</a></li>").appendTo(".ip2left_main ul");
        		})
        	}

		});
	
})