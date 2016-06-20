// (function() {
	
	
	
// 	/*设计图为640 字体大小为40*/
// 	function changefontsize(){
// 			var _this=this;

// 			var html=document.getElementsByTagName('html')[0];

// 			var screenWitdh=_this.innerWidth;

// 			html.style.fontSize=(screenWitdh*0.125)/2+"px";
// 	}
// 	changefontsize();

// 	window.onresize=function(){
// 		changefontsize();
// 	}

// })();
	function changefontsize(){
		// if($(window).width()<480){
			$('html').css('font-size', ($(window).width() / 7.2+'px'));
		// }
		// else if($(window).width()<768){
		// 	$('html').css('font-size', '50px');
		// }
		// else{
		// 	$('html').css('font-size', '75px');
		// 	}
		// }
	}
$(document).ready(function(){
// $('html').css('font-size', ($(window).width() / 7.2 * 75 / 16) + '%');
// 720/16
changefontsize();
	
});
	window.onresize=function(){
		changefontsize();
	}

//提示弹框
function tips(head_context,context){
	$(".tips .tan_head .t").html(head_context);
	$(".tips .tan_content p").html(context);
	$(".tips,.mask").show();
}	
