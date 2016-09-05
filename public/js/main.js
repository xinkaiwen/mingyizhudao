$(function(){
	
	$(".liuke_a li").eq(0).css({"background-position":"0,0"});
	$(".liuke_a li").eq(1).css({"background-position":"-200px,0"});
	$(".liuke_a li").eq(2).css({"background-position":"-400px,0"});
	$(".liuke_a li").eq(3).css({"background-position":"-590px,0"});
	$(".liuke_a li").eq(4).css({"background-position":"-780px,0"});
	$(".liuke_a li").eq(5).css({"background-position":"-980px,0"});
	$(".liuke_a li").eq(0).children().css({"background-position":"0,0"});
	$(".liuke_a li").eq(1).children().css({"background-position":"-200px,0"});
	$(".liuke_a li").eq(2).children().css({"background-position":"-400px,0"});
	$(".liuke_a li").eq(3).children().css({"background-position":"-590px,0"});
	$(".liuke_a li").eq(4).children().css({"background-position":"-780px,0"});
	$(".liuke_a li").eq(5).children().css({"background-position":"-980px,0"});

	$(".liuke_a li").hover(function(){
		var i = $(this).index();
		switch(i){
			case 0: $(this).css({"background-color":"#81C1CA"})
			break;
			case 1:$(this).css({"background-color":"#9582B6"})
			break;
			case 2:$(this).css({"background-color":"#F2B4BF"})
			break;
			case 3:$(this).css({"background-color":"#8FC07B"})
			break;
			case 4:$(this).css({"background-color":"#F18A2E"})
			break;
			case 5:$(this).css({"background-color":"#D55B81"})
			break;
		}
		$(this).children().animate({"height":"80px"},400)
	},function(){
		$(".liuke_a li").css({"background-color":"#F7F7F7"});
		$(this).children().animate({"height":"0px"},200)
	})
	$(".liukec_leftb li a").eq(0).css({"background-position":"15px 18px"})
	$(".liukec_leftb li a").eq(1).css({"background-position":"-105px 18px"})
	$(".liukec_leftb li a").eq(2).css({"background-position":"-222px 18px"})
	$(".liukec_leftb li a").eq(3).css({"background-position":"-336px 18px"})
	$(".liukec_leftb li a").eq(4).css({"background-position":"-462px 18px","width":"80%","overflow":"hidden","margin":"0 auto","border-bottom":"none"})
	$(".liukec_leftb li a").eq(5).css({"background-position":"-575px 18px","border-top":"1px solid #fff"})
	$(".liukec_leftb li span").hide();
	$(".liukec_leftb li span").eq(0).show();
	$(".liukec_right>div").css({"display":"none"});
	$(".liukec_right>div").eq(0).show();
	$(".liukec_leftb li a").mouseover(function(){
		$(".liukec_leftb li").css({"background-color": "#87CCC5"});
		$(this).parent().css({"background-color":"#ABDBD6"});
		$(".liukec_leftb li span").hide();
		$(this).next().show();
		var i = $(this).parent().index();
		$(".liukec_right>div").css({"display":"none"});
		$(".liukec_right>div").eq(i).show();
	})
	
	$(".liukec_oplayula").hide();
	$(".liukec_oplayula").eq(0).show();
	$(".liukec_oplayulb li").eq(0).css({"background-color":" #87CCC5"})
	$(".liukec_oplayulb li").click(function(){
		$(".liukec_oplayulb li").css({"background-color":" #DCDCDD"})
		$(this).css({"background-color":"#87CCC5"})
		var i = $(this).index();
		$(".liukec_oplayula").hide();

		$(".liukec_oplayula").eq(i).show();
	})

	// window.onload=function(){
	// 		var oDiv = document.getElementById('playBox');
	// 	    var oPre = getByClass(oDiv, 'pre')[0];
	// 	    var oNext = getByClass(oDiv, 'next')[0];
	// 	    var oUlBig = getByClass(oDiv, 'oUlplay')[0];
	// 	    var aBigLi = oUlBig.getElementsByTagName('li');
	// 	    var oDivSmall = getByClass(oDiv, 'smalltitle')[0]
	// 	    var aLiSmall = oDivSmall.getElementsByTagName('li');
	// 	    var now = 0;
	// 	    //定义图片轮播的方法，下方的指示器的触发样式
	// 	    function tab() {
	// 	        for (var i = 0; i < aLiSmall.length; i++) {
	// 	            aLiSmall[i].className = '';
	// 	        }
	// 	        aLiSmall[now].className = 'thistitle'
	// 	        startMove(oUlBig, 'left', -(now * aBigLi[0].offsetWidth))
 //    		}
	// 	    for (var i = 0; i < aLiSmall.length; i++) {
	// 	        aLiSmall[i].index = i;
	// 	        aLiSmall[i].onclick = function() {
	// 	            now = this.index;
	// 	            tab();
	// 	        }
	// 	    }

	// 	    //左右箭头点击时执行不同方向上的图片轮播
	// 	    oPre.onclick = function() {
	// 	        now--
	// 	        if (now == -1) {
	// 	            now = aBigLi.length;
	// 	        }
	// 	        tab();
	// 	    }
	// 	    oNext.onclick = function() {
	// 	        now++
	// 	        if (now == aBigLi.length) {
	// 	            now = 0;
	// 	        }
	// 	        tab();
	// 	    }

	// 	    //滚动间隔时间设置
	// 	    var timer = setInterval(oNext.onclick, 3000) //滚动间隔时间设置
	// 	    oDiv.onmouseover = function() {
	// 	        clearInterval(timer)
	// 	    }
	// 	    oDiv.onmouseout = function() {
	// 	        timer = setInterval(oNext.onclick, 3000) //滚动间隔时间设置
	// 	    }
	// 	}

		// function getStyle(obj, name) {
		//     if (obj.currentStyle) {
		//         return obj.currentStyle[name]
		//     } else {
		//         return getComputedStyle(obj, false)[name]
		//     }
		// }

		// function getByClass(oParent, nClass) {
		//     var eLe = oParent.getElementsByTagNames('*');
		//     var aRrent = [];
		//     for (var i = 0; i < eLe.length; i++) {
		//         if (eLe[i].className == nClass) {
		//             aRrent.push(eLe[i]);
		//         }
		//     }
		//     return aRrent;
		// }

		// function startMove(obj, att, add) {
		//     clearInterval(obj.timer)
		//     obj.timer = setInterval(function() {
		//         var cutt = 0;
		//         if (att == 'opacity') {
		//             cutt = Math.round(parseFloat(getStyle(obj, att)));
		//         } else {
		//             cutt = Math.round(parseInt(getStyle(obj, att)));
		//         }
		//         var speed = (add - cutt) / 8;
		//         speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		//         if (cutt == add) {
		//             clearInterval(obj.timer)
		//         } else {
		//             if (att == 'opacity') {
		//                 obj.style.opacity = (cutt + speed) / 100;
		//                 obj.style.filter = 'alpha(opacity:' + (cutt + speed) + ')';
		//             } else {
		//                 obj.style[att] = cutt + speed + 'px';
		//             }
		//         }

		//     }, 30)
		// }

		function fwlc(){
			var fwlcnow=-1;
			var fwlctimer=setInterval(function(){
				fwlcnow++;
				if (fwlcnow>4) {
				fwlcnow=-1
			}
				$(".spannumber").css({"background-color":"#DCDCDD","color":"#555"})
				$(".spannumber").eq(fwlcnow).css({"background-color":"#5CB6AF","color":"#fff"})
			},1000)
			
		}
		fwlc();


		
})