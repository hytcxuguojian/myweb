$(function(){	
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

});