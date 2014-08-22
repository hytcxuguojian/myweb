$(function(){
		
	/***********发表说说*************/
	$("#fabiaoBtn1").click(function(){
		index++;
		gettime();
		var shuoshuo=$(".shuoshuo_editor").val();
		var html="";
		html+='<li class="news" id="news'+index+'">';
		html+='	<div class="newsHeader">';
		html+='		<a href="" class="authorheadImage myheadImage"></a>';
		html+='		<div class="authorInfo">';
		html+='			<div class="authorNick">';
		html+='				<a href="" >子胥吾有</a>';
		html+='				<span class="qz-level" title="当前空间等级：58级；积分：17502分">';
		html+='					<span class="qzone_lv qzone_lv3">';
		html+='						<span class="number">';
		html+='							<b class="d5"></b>';
		html+='							<b class="d8"></b>';
		html+='						</span>';
		html+='					</span>';
		html+='				</span>';
		html+='			</div>';
		html+='			<div class="infoDetail">';
		html+='				<span class="timeState">'+date+'</span>';
		html+='				<a href="" class="visitor">';
		html+='					<i class="icon-browse"></i>浏览(0)';
		html+='				</a>';
		html+='			</div>';
		html+='		</div>';
		html+='	</div>';
		html+='	<div class="newsInfo">';
		html+=	shuoshuo;	
		html+='	</div>';
		html+='	<div class="news_op_wrap">';
		html+='		<div class="newsDetail">';
		html+='			<span name="comment" class="newsDetailItem">';
		html+='				<i class="icon-comment"></i>评论';
		html+='			</span>';
		html+='			<span class="item-line"></span>';
		html+='			<span name="forwarding" class="newsDetailItem">';
		html+='				<i class="icon-forwarding"></i>转发';
		html+='			</span>';
		html+='			<span class="item-line"></span>';
		html+='			<span name="dianzan" class="newsDetailItem" clicked="0">';
		html+='				<i class="icon-zan"></i>';
		html+='				<span class="likeSpan" likeit="false">赞</span>';
		html+='				<span class="likeCountSpan" likeCount="0">(0)</span>';
		html+='			</span>';
		html+='			<span class="item-line"></span>';
		html+='			<span name="collect" class="newsDetailItem">';
		html+='				<i class="icon-collect"></i>收藏';
		html+='			</span>';
		html+='			<span class="item-line"></span>';
		html+='			<span name="moreFunction" class="newsDetailItem">';
		html+='				<i class="icon-more"></i>';
		html+='				<div class="more_OP_list">';
		html+='					<span class="hidenSpan">隐藏</span>';
		html+='					<span class="spilidSpan"></span>';
		html+='					<span class="reportSpan">举报</span>';
		html+='				</div>';
		html+='			</span>';
		html+='		</div>';
		html+='		<div class="newsLikeInfo"  style="display:none;">';
		html+='			<div class="newslikeBtn">';
		html+='				<i class="newsLikeIcon"></i>';
		html+='			</div>';
		html+='			<div class="newsLikeList"> ';
		html+='			</div>';
		html+='		</div>';
		html+='		<div class="Comments">';
		html+='			<ul class="CommentsList" id="CommentsList'+index+'"></ul>';
		html+='			<div class="comment_poster">';
		html+='				<div class="comment_poster_editor">';
		html+='					<div class="inputBoxInner clearfixed">';
		html+='						<textarea class="textInput"></textarea>';
		html+='						<div class="addPhoto">';
		html+='							<i class="icon-addPhoto"></i>';
		html+='						</div>';
		html+='					</div>';
		html+='					<div class="postfooter comment_postfooter" style="display:block">';
		html+='						<div class="addons">';
		html+='							<span class="postfooter_link expression" title="插入表情"></span>';
		html+='							<span class="postfooter_link remind" title="提到好友"></span>';
		html+='						</div>';
		html+='						<div class="privateComment">';
		html+='							<input type="checkbox" class="evt_click">';
		html+='							<span class="spanforcheckbox">私密评论</span>';
		html+='							<i class="picforcheckbox"></i>';
		html+='						</div>';
		html+='						<span class="fabiao" belong="CommentsList'+index+'">';
		html+='							发表';
		html+='						</span>';
		html+='					</div>';
		html+='				</div>';
		html+='			</div>';
		html+='		</div>';
		html+='	</div>';
		html+='</li>';
		if(shuoshuo!="")
		{
			$(".allNewsContent").prepend(html);
		}
		$(".shuoshuo_editor").val("");
	});
	
	/***********对说说进行回复***********/
	$(document).on("click",".fabiao",function(){
		gettime();
		var huifu=$(this).parent().parent().find(".textInput").val();
		var CommentsList=$(this).attr("belong");
		var html="";
		html+='<li class="Comment_item">';
		html+='	<div class="Comment_item_bd">';
		html+='		<a href="" class="ui_avatar">';
		html+='			<img src="images/zixuwuyou.jpg">';
		html+='		</a>';
		html+='		<div class="comments_content">';
		html+='			&nbsp<a href="" class="c_tx q_namecard">子胥吾有</a>&nbsp : '+huifu+'';
		html+='			<div class="comment_op">';
		html+='				<span class="timeState">'+date+'</span>';
		html+='				<span class="act_reply"></span>';
		html+='			</div>';
		html+='			<div class="comment_sub">';
		html+='			</div>';
		html+='		</div>';
		html+='	</div>';
		html+='</li>';
		if(huifu!="")
		{
			$("#"+CommentsList).prepend(html);
		}
		$(this).parent().parent().find(".textInput").val("");
	});


	/******左侧菜单显示隐藏列表*****/
	$(".tabSwitch").mouseover(function(){
		$(this).hide();
		$(this).parent().find(".tab_hide_list").show();
	});

	/***********发表说说文本框************/
	$(".shuoshuo_editor").focus(function(){
		$(".postfooter").slideDown(300);
	});
	$(".postSection").click(function(){
		$(".postfooter").slideDown(300);
		return false;
	});
	$(document).click(function(){
		$(".postfooter").slideUp(300);
	});

	/**************点赞--取消赞**************/
	$(document).on("click",".newsDetailItem[name='dianzan']",function(){
		var clickState=$(this).attr("clicked");
		var likeit=$(this).find(".likeSpan").attr("likeit");
		var likeCount=$(this).find(".likeCountSpan").attr("likecount");
		var num=parseInt(likeCount);
		var html="";
		html+='<a href="" class="userItem" id="zixuwuyou" title="子胥吾有">';
		html+='	<img src="images/zixuwuyou.jpg">';
		html+='</a>';
		if(likeCount=='0'&&likeit=='false')
		{
			$(this).parent().parent().find(".newsLikeInfo").show();
		}
		if(likeCount=='1'&&likeit=='true')
		{
			$(this).parent().parent().find(".newsLikeInfo").hide();
		}
		if (clickState=='0')
		{
			$(this).find(".likeSpan").html("取消赞");
			num++;
			$(this).find(".likeCountSpan").attr("likecount",num)
			$(this).find(".likeCountSpan").html("("+ num+")");
			$(this).attr("clicked","1");
			$(this).parent().parent().find(".newsLikeList").prepend(html);
			$(this).find(".likeSpan").attr("likeit",'true');
		}
		if (clickState=='1')
		{
			$(this).find(".likeSpan").html("赞");
			num--;
			$(this).find(".likeCountSpan").attr("likecount",num)
			$(this).find(".likeCountSpan").html("("+ num+")");
			$(this).attr("clicked","0");
			$(this).parent().parent().find(".newsLikeList").find("#zixuwuyou").remove();
			$(this).find(".likeSpan").attr("likeit",'false');
		}
	});
	$(document).on("click",".newslikeBtn",function(){
		$("this").parent().parent().find(".newsDetailItem[name='dianzan']").trigger("click");
	});
	/************隐藏举报***********/
	$(document).on("mouseover",".newsDetailItem[name='moreFunction']",function(){
		$(this).find(".more_OP_list").show();
	});
	$(document).on("mouseout",".newsDetailItem[name='moreFunction']",function(){
		$(this).find(".more_OP_list").hide();
	});
});

var index=10000;/*用于标识*/
var commentIndex=1;
var date;
function gettime()
{
	var d=new Date();
	var h = d.getHours(); 
	var m = d.getMinutes(); 
	date=h.toString()+':'+m.toString();
}
		