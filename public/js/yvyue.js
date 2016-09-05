$(function(){
	$(".kuaisuyvyue").click(function(){
		$("body>div.content").css({"position":"fixed"});
		// $("div.fixlefta").css({"position":"fixed","z-index":"99999","right":"0","top":"200px","background":"red"})
		$("<div class='kuaisuyvyuediv'><div class='wyyy'></div><div class='ksyyform'><form></form></div></div>").appendTo("body")
		
		$("<h1>我要预约</h1><span class='close'>关闭</span>").appendTo(".wyyy")
		$("<p class=formtext'><label>医院：</label><input type='text' placeholder='可不填'></input></p>").appendTo(".ksyyform");
		$("<p class=formtext'><label>科室：</label><input type='text' placeholder='可不填'></input></p>").appendTo(".ksyyform");
		$("<p class=formtext'><label>医生：</label><input type='text' placeholder='可不填'></input></p>").appendTo(".ksyyform");
		$("<p class=formtext'><label>患者姓名：</label><input type='text' placeholder='请输入患者的真实姓名'></input></p>").appendTo(".ksyyform");
		$("<p class=formtext'><label>手机号：</label><input type='text' placeholder='请输入手机号'></input></p>").appendTo(".ksyyform");
		$("<p class=formtext'><label>图形验证码：</label><input type='text' placeholder='请输入图形验证码'></input></p>").appendTo(".ksyyform");
		$("<p class=formtext'><label>验证码：</label><input type='text' placeholder='请输入验证码'></input></p>").appendTo(".ksyyform");
		$("<p class=formtext'><label>疾病诊断：</label><input type='text' placeholder='可不填'></input></p>").appendTo(".ksyyform");
		$("<p class='formtextarea'><label>病情：</label><textarea rows='5' placeholder='请输入病情症状'></textarea></p>").appendTo(".ksyyform");
		$("<p class='formcheckbox'><input type='checkbox'>我已同意《名医主刀在线用户协议》</input></p>").appendTo(".ksyyform");
		$("<p class='formsubmit'><input type='submit'></input></p>").appendTo(".ksyyform");
		$(".kuaisuyvyuediv .wyyy .close").click(function(){
			$("body>div.content").css({"position":"relative"});
			$(".kuaisuyvyuediv").remove();
		})
	})


	$(".login").click(function(){
		$("body>div.content").css({"position":"fixed"});

		$("<div class='logincontainer'><div class='loginmain clearfix'></div></div>").appendTo("body")
		$("<span class='close'>关闭</span><div class='loginleft'><div class='loginform'></div></div>").appendTo(".loginmain")
		$("<img src='../public/images/login.jpg'>").appendTo(".loginleft");
		$("<form><h1>感谢您选择名医主刀!</h1></form>").appendTo(".loginform");
		$("<p class='loginradio'><input type='radio' name='fangshi'/><span>手机号快速登录</span><input type='radio' name='fangshi'/><span>帐号密码登录</span></p>").appendTo(".loginform form");
		$("<p class='logintext'><img src='../public/images/zhuce1.jpg'><input type='text' placeholder='请输入手机号'/></p>").appendTo(".loginform form");
		$("<p class='logintext'><img src='../public/images/zhuce2.jpg'><input type='text' placeholder='请输入图形验证码'/></p>").appendTo(".loginform form");
		$("<p class='logintext'><img src='../public/images/zhuce3.jpg'><input type='text' placeholder='请输入验证码'></input></p>").appendTo(".loginform form")
		$("<p class='logincheckbox'><input type='checkbox'><span>下次记住我</span></input></p>").appendTo(".loginform form")
		$("<p class='loginsubmit'><input type='submit' value='登录'></input></p>").appendTo(".loginform form")
		$("<span class='zhuyi'>*如未注册，将自动创建您的名医主刀账号</span>").appendTo(".loginform form")






		$(".logincontainer .close").click(function(){
			$("body>div.content").css({"position":"relative"});
			$(".logincontainer").remove();
		})
	})

	$(".indexlogin").click(function(){
		$("body>div.content").css({"position":"fixed"});

		$("<div class='logincontainer'><div class='loginmain clearfix'></div></div>").appendTo("body")
		$("<span class='close'>关闭</span><div class='loginleft'><div class='loginform'></div></div>").appendTo(".loginmain")
		$("<img src='public/images/login.jpg'>").appendTo(".loginleft");
		$("<form><h1>感谢您选择名医主刀!</h1></form>").appendTo(".loginform");
		$("<p class='loginradio'><input type='radio' name='fangshi'/><span>手机号快速登录</span><input type='radio' name='fangshi'/><span>帐号密码登录</span></p>").appendTo(".loginform form");
		$("<p class='logintext'><img src='public/images/zhuce1.jpg'><input type='text' placeholder='请输入手机号'/></p>").appendTo(".loginform form");
		$("<p class='logintext'><img src='public/images/zhuce2.jpg'><input type='text' placeholder='请输入图形验证码'/></p>").appendTo(".loginform form");
		$("<p class='logintext'><img src='public/images/zhuce3.jpg'><input type='text' placeholder='请输入验证码'></input></p>").appendTo(".loginform form")
		$("<p class='logincheckbox'><input type='checkbox'><span>下次记住我</span></input></p>").appendTo(".loginform form")
		$("<p class='loginsubmit'><input type='submit' value='登录'></input></p>").appendTo(".loginform form")
		$("<span class='zhuyi'>*如未注册，将自动创建您的名医主刀账号</span>").appendTo(".loginform form")






				$(".logincontainer .close").click(function(){
					$("body>div.content").css({"position":"relative"});
					$(".logincontainer").remove();
		})
	})
})


