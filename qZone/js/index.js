$(function(){	

	/******左侧菜单显示隐藏列表*****/
	$(".tabSwitch").mouseover(function(){
		$(this).hide();
		$(this).parent().find(".tab_hide_list").show();
	});

	/***********发表说说文本框************/
	$(".shuoshuo_editor").focus(function(){
		$(".postfooter").slideDown(300);
		return false;
	});
	$(".shuoshuo_editor").blur(function(){
		$(".postfooter").slideUp(300);
	});
});