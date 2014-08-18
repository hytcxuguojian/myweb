$(function(){

	/*tbody操作区显示*/
	$("tbody").hover(function(){
		$(this).find(".lastOperates").show();
	},function(){
		$(this).find(".lastOperates").hide();
	});
});
	