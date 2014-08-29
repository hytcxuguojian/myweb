$(function(){	
	/*改变背景*/
	$(".changeBgFre").click(function(){
		index--;
		if (index<1) {index=10};
		if (index>10) {index=1};
		changeBackground(index);
	});
	$(".changeBgNext").click(function(){
		index++;
		if (index<1) {index=10};
		if (index>10) {index=1};
		changeBackground(index);
	});
	/*底部选项卡切换事件*/
	$(".navTHead li").click(function(){
		var panelname=$(this).attr("id");
		$(".navTHead li").removeClass("Selected");
		$(this).addClass("Selected");
		$(".navTHead li").find("div").removeClass("newicon");
		$(this).find("div").addClass("newicon");
		$(".panel").hide();
		$("#"+panelname+"P").show();
	});

	/*设置登录状态*/
	$(".dropDown").click(function(){
		var openstate=$(this).attr("isopen");
		if (openstate==0) 
		{ 
			$(".onlineStateSetUl").show();
			$(this).attr("isopen","1");
		};
		if (openstate==1) 
		{ 
			$(".onlineStateSetUl").hide();
			$(this).attr("isopen","0");
		};
	});
	$(".onlineStateSetUl li").click(function(){
		var iClass=$(this).find("i").attr("class");
		$("#onlineState").removeClass();
		$("#onlineState").addClass("onlineStateSet");
		$("#onlineState").addClass(iClass);
		$(".avatarWrap span").removeClass();
		$(".avatarWrap span").addClass("userState");
		$(".avatarWrap span").addClass(iClass);
		$(".dropDown").click();
	});
	/*消息相关设置*/
	$(".messageSet").click(function(){
		$("#messageSetP").show();
	});
	$(".leftbtn").click(function(){
		$("#messageSetP").hide();
	});
	$(".checkbox").click(function(){
		$(this).toggleClass("checked");
		$(this).find("span").toggleClass("spanChecked");
	});
	/*查看关于QQ*/
	$(".aboutQQ").click(function(){
		var openstate=$(this).attr("isopen");
		if (openstate==0) 
		{ 
			$("#aboutQQInfo").show();
			$(this).attr("isopen","1");

		};
		if (openstate==1) 
		{ 
			$("#aboutQQInfo").hide();
			$(this).attr("isopen","0");
		};
		$(this).find("span").toggleClass("more_icon_open");
	});

});
var index=1;
function changeBackground(picindex)
{
	$("#bgImage").find("img").hide(0,function(){
		$("#bgImage").find("img[picIndex="+picindex+"]").show();
	});
	
}