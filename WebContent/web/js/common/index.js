$(document).ready(function(){
	var baseUrl = $("#base_url").val();
	
	avalon.ready(function(){
		window.vmindex = avalon.define({
			$id: "index",
			personName: "",
			treeList: []
		});
		avalon.scan();
	});
	
	
	// === 菜单赋值 === //
	/*$.ajax({
		url: baseUrl + "/client/party/getResTree",
		type: "post",
		data: {},
		dataType: "json",
		success: function(res){
			if(res.isSuccess){
				window.vmindex.treeList = res.data;
			}
		}
	});*/
	
	/*获取登录用户信息*/
	$.ajax({
		url: baseUrl + "/client/party/umpi01f001",
		type: "post",
		data: {},
		dataType: "json",
		success: function(res){
			if(res.isSuccess){
				window.vmindex.personName = res.data.personName;
			}else{
				window.location.href = baseUrl + "/client/party/logout";
			}
		}
	});
	
	/*tab滚动*/
	var p=0,t=0,h=0;
	$("#tab-top").scroll(function(){
		p = $(this).scrollTop();
		if(t<p){
			h+= 32;
		}else{
			h-= 32;
		}
		
	});
	
	/*tab标签点击*/
	$(document).on("click",".tab-li",function(){
		var t = $(this).attr("t");
		var tid = $(this).attr("tid");
		$(".tab-li").removeClass("tab-li-select");
		$(this).addClass("tab-li-select");
		$(".tab-center").hide();
		$(".tab-center:eq("+t+")").show();
		
		tabSyn(tid);
		
	});
	/*tab标签关闭按钮点击*/
	$(document).on("click",".tab-close",function(e){
		var t = $(this).parent().attr("t");
		var selectFlag = $(this).parent().hasClass("tab-li-select");
		
		$(this).parent().remove();
		$(".tab-center:eq("+t+")").remove();
		$(".tab-li").each(function(i){
			$(this).attr("t",i);
		});
		
		if(selectFlag){
			$(".tab-li:eq("+(t-1)+")").addClass("tab-li-select");
			$(".tab-center:eq("+(t-1)+")").show();
			var tid = $(".tab-li:eq("+(t-1)+")").attr("tid");
			tabSyn(tid);
		}
		
		showScrollButton();
		
		e.stopPropagation();
	});
	
	/*tab左右点击*/
	$("#tab-prev").bind("click",function(){
		var left = $("#tab-ul").position().left;
		var next_left = left + 100;
		if(next_left > 0 ){
			$("#tab-ul").animate({"left": 0}, 100);
		}else{
			$("#tab-ul").animate({"left": next_left}, 100);
		}
	});
	$("#tab-next").bind("click",function(){
		var left = $("#tab-ul").position().left;
		var next_left = left - 100;
		
		var tab_left_width = $("#tab-left").width();		//tab本身的宽度
		var tab_li_width = 0;							    //tab总数的宽度
		$(".tab-li").each(function(){
			tab_li_width += $(this).outerWidth(true);
		});
		var diff = tab_li_width - tab_left_width;
		
		if(diff < 0){
			$("#tab-ul").animate({"left": 0}, 100);
		}else{
			if( Math.abs(next_left) < diff ){
				$("#tab-ul").animate({"left": next_left}, 100);
			}else{
				$("#tab-ul").animate({"left": -diff}, 100);
			}
		}
			
	});
	
	
	$(document).on("click",".menu_a",function(){
	
		/*面包屑导航*/
/* 		var secondIcon = $(this).closest(".submenu").find("a:first > i").attr("class");
		var secondTitle = $(this).closest(".submenu").find("a:first > span").html();
		var curTitle = $(this).attr("stitle");
		$("#breadcrumb").html('<a href="index.html" title="Go to Home"><i class="icon-home"></i>主页</a>');
		if(secondTitle!="主页"){
			$("#breadcrumb").append('<a href="#" title="'+secondTitle+'"><i class="'+secondIcon+'"></i>'+secondTitle+'</a>');
			$("#breadcrumb").append('<a href="#" title="'+curTitle+'">'+curTitle+'</a>');
		}*/
		
		/*单页面刷新*/
		//$("#iframe-main").attr("src", $(this).attr('link'));
		
		
		/*tab标签导航*/
		var link = $(this).attr('link');
		var curTitle = $(this).attr("stitle");
		var tid = $(this).attr("tid");
		var t = $(".tab-li").length;
		$(".tab-li").removeClass("tab-li-select");
		
		var hasExist = false;
		$(".tab-li").each(function(){
			if($(this).attr("tid") == tid){
				t = $(this).attr("t");
				$(this).addClass("tab-li-select");
				hasExist = true;
			}
		});
		
		
		if(hasExist){
			//重新刷新页面
			var iframeDom = $("#iframe_"+tid)[0];
			iframeDom.contentWindow.location.reload(true);
			afterOpenTab();
			clearAfterOpenTab();
		}else{
			$("#tab-ul").append("<li class=\"tab-li tab-li-select\" t=\""+t+"\" tid=\""+tid+"\">"+curTitle+"<div class=\"tab-close\"></div></li>");
			$("#tab-body").append("<div class=\"tab-center\" tid=\""+tid+"\">"+
				        			"<iframe id=\"iframe_"+tid+"\" name=\"page_"+tid+"\" src=\""+link+"\" frameborder=\"0\" style=\"width:100%;height:99.6%;\" class=\"layui-layer-load2\" ></iframe>"+
				        		"</div>");
			
			var iframeDom = $("#iframe_"+tid)[0];
			if(iframeDom.attachEvent){
				iframeDom.attachEvent("onload", function(){
					iframeBodyClick(iframeDom)
					afterOpenTab();
					clearAfterOpenTab();
			    });
			}else{
				iframeDom.onload = function(){
					iframeBodyClick(iframeDom);
					afterOpenTab();
					clearAfterOpenTab();
			    };
			}
			
		}
		
		/*显示iframe页面*/
		$(".tab-center").hide();
		$(".tab-center:eq("+t+")").show();
		
		/*显示左侧sidebar选中*/
		$(".menu_a").parent('li').removeClass('active');
		$(this).parent('li').addClass('active');
		
		init();
		
		showScrollButton();
		
	});
	
	$(document).on("click",".submenu > a",function(e){
	
		e.preventDefault();
		var submenu = $(this).siblings('ul');
		var li = $(this).parents('li');
		var submenus = $('#sidebar li.submenu ul');
		var submenus_parents = $('#sidebar li.submenu');
		if(li.hasClass('open'))
		{
			if(($(window).width() > 768) || ($(window).width() < 479)) {
				submenu.slideUp();
			} else {
				submenu.fadeOut(250);
			}
			li.removeClass('open');
		} else 
		{
			if(($(window).width() > 768) || ($(window).width() < 479)) {
				submenus.slideUp();			
				submenu.slideDown();
			} else {
				submenus.fadeOut(250);			
				submenu.fadeIn(250);
			}
			submenus_parents.removeClass('open');		
			li.addClass('open');	
		}
	});
	
	var ul = $('#sidebar > ul');
	
	$(document).on("click","#sidebar > a",function(e){
	
		e.preventDefault();
		var sidebar = $('#sidebar');
		if(sidebar.hasClass('open'))
		{
			sidebar.removeClass('open');
			ul.slideUp(250);
		} else 
		{
			sidebar.addClass('open');
			ul.slideDown(250);
		}
	});
	
	// === Resize window related === //
	$(window).resize(function()
	{
		/*if($(window).width() > 479)
		{
			ul.css({'display':'block'});	
			$('#content-header .btn-group').css({width:'auto'});		
		}
		if($(window).width() < 479)
		{
			ul.css({'display':'none'});
			fix_position();
		}
		if($(window).width() > 768)
		{
			$('#user-nav > ul').css({width:'auto',margin:'0'});
            $('#content-header .btn-group').css({width:'auto'});
		}*/
	});
	
	if($(window).width() < 468)
	{
		ul.css({'display':'none'});
		//fix_position();
	}
	
	if($(window).width() > 479)
	{
	   $('#content-header .btn-group').css({width:'auto'});
		ul.css({'display':'block'});
	}
	
	// === Tooltips === //
	$('.tip').tooltip();	
	$('.tip-left').tooltip({ placement: 'left' });	
	$('.tip-right').tooltip({ placement: 'right' });	
	$('.tip-top').tooltip({ placement: 'top' });	
	$('.tip-bottom').tooltip({ placement: 'bottom' });	
	
	// === Search input typeahead === //
	$('#search input[type=text]').typeahead({
		source: ['Dashboard','Form elements','Common Elements','Validation','Wizard','Buttons','Icons','Interface elements','Support','Calendar','Gallery','Reports','Charts','Graphs','Widgets'],
		items: 4
	});
	
	// === Fixes the position of buttons group in content header and top user navigation === //
	function fix_position()
	{
		var uwidth = $('#user-nav > ul').width();
		$('#user-nav > ul').css({width:uwidth,'margin-left':'-' + uwidth / 2 + 'px'});
        
        var cwidth = $('#content-header .btn-group').width();
        $('#content-header .btn-group').css({width:cwidth,'margin-left':'-' + uwidth / 2 + 'px'});
	}
	
	// === Style switcher === //
	$('#style-switcher i').click(function()
	{
		if($(this).hasClass('open'))
		{
			$(this).parent().animate({marginRight:'-=190'});
			$(this).removeClass('open');
		} else 
		{
			$(this).parent().animate({marginRight:'+=190'});
			$(this).addClass('open');
		}
		$(this).toggleClass('icon-arrow-left');
		$(this).toggleClass('icon-arrow-right');
	});
	
	$('#style-switcher a').click(function()
	{
		var style = $(this).attr('href').replace('#','');
		$('.skin-color').attr('href','css/maruti.'+style+'.css');
		$(this).siblings('a').css({'border-color':'transparent'});
		$(this).css({'border-color':'#aaaaaa'});
	});
	
	$('.lightbox_trigger').click(function(e) {
		
		e.preventDefault();
		
		var image_href = $(this).attr("href");
		
		if ($('#lightbox').length > 0) {
			
			$('#imgbox').html('<img src="' + image_href + '" /><p><i class="icon-remove icon-white"></i></p>');
		   	
			$('#lightbox').slideDown(500);
		}
		
		else { 
			var lightbox = 
			'<div id="lightbox" style="display:none;">' +
				'<div id="imgbox"><img src="' + image_href +'" />' + 
					'<p><i class="icon-remove icon-white"></i></p>' +
				'</div>' +	
			'</div>';
				
			$('body').append(lightbox);
			$('#lightbox').slideDown(500);
		}
		
	});
	

	$('#lightbox').live('click', function() { 
		$('#lightbox').hide(200);
	});
	
	
	/*tab li添加右键功能*/
	var $contextMenu = $("#tab-menu");
    var $rowClicked;
	$(document).on("contextmenu", ".tab-li", function (e) {
		var t = $(this).attr("t");
		if(t==0){
			return false;
		}
		
        $rowClicked = $(this);
        var pageWidth = $(window).width();
        var menuWidth = $contextMenu.width();
        var leftPosition = e.pageX + menuWidth > pageWidth ? e.pageX - menuWidth : e.pageX;

        $contextMenu.css({
            display: "block",
            left: leftPosition,
            top: e.pageY
        });
        $contextMenu.addClass("open");
        return false;
    });
	$contextMenu.on("click", "a", function () {
		var s_t = $(".tab-li-select").attr("t");
//		var s_tid = $(".tab-li-select").attr("tid");
		var t = $rowClicked.attr("t");
		var tid = $rowClicked.attr("tid");
		var tabindex = $(this).attr("tabindex");
		if(tabindex == 1) {
			$("#tab-top").find("[tid="+tid+"]").find(".tab-close").eq(0).trigger("click");
		}
		/*关闭其他*/
		else if(tabindex == 2) {
			$(".tab-li").each(function(index){
				 var c_tid = $(this).attr("tid");
				 if(!(c_tid == tid || c_tid == undefined || index==0)) {//排除首页
					 $(this).remove();
					 $("#tab-body").find(".tab-center[tid="+c_tid+"]").remove();
				 }
			});
			$(".tab-li").each(function(i){
				  $(this).attr("t",i);
			});
			  
			if(s_t != t) {
				  $("#tab-top").find(".tab-li[tid="+tid+"]").addClass("tab-li-select");
				  $("#tab-body").find(".tab-center[tid="+tid+"]").show();
				  tabSyn(tid);
			}
			
			showScrollButton();
		}
		/*关闭所有*/
		else if(tabindex == 3) {
			$(".tab-li").each(function(){
				 var c_t = $(this).attr("t");
				 var c_tid = $(this).attr("tid");
				 if(c_t != 0) {
					 $(this).remove();
					 $("#tab-body").find(".tab-center[tid="+c_tid+"]").remove();
				 }
			});
			$(".tab-li").eq(0).trigger("click");
			
			showScrollButton();
		}
		
        $contextMenu.removeClass("open");
    });
	
	/*父页面整体点击事件*/
	$(document).click(function () {
		$contextMenu.removeClass("open");
    });
	/*子页面整体点击事件*/
	function iframeBodyClick(iframeDom){
		$(iframeDom).contents().find("body").click(function(){
			$contextMenu.removeClass("open");
		});
	}
	
	/*点击左右缩放按钮*/
	$(".pngfix").bind("click", function(){
		if($(this).hasClass("open")){
			$("#sidebar-out").animate({"width":"200px"}, "fast");
			$(".dislpayArrow").animate({"left":"200px"}, "fast");
			$("#content").animate({"margin-left":"205px"}, "fast");
			$(this).removeClass("open");
		}else{
			$("#sidebar-out").animate({"width":"0px"}, "fast");
			$(".dislpayArrow").animate({"left":"0px"}, "fast");
			$("#content").animate({"margin-left":"5px"}, "fast");
			$(this).addClass("open");
		}
	});
});

/*sider同步(不触发click)*/
function tabSyn(tid){
	if(tid==undefined){
		var activedom = $("#sidebar .active");
		activedom.removeClass("active");
		activedom.parent().prev("a").trigger("click");
		return;
	}
	
	$(".menu_a").each(function(){
		var e_tid = $(this).attr("tid");
		if(e_tid==tid) {
			if(!$(this).parent().hasClass("active")){
				/*判断是否含有子菜单*/
				if($(this).parent().hasClass("submenu")){
					$("#sidebar .open > a").trigger("click");
					$("#sidebar .active").removeClass("active");
					$(this).parent().addClass("active");
					//$(this).trigger("click");
				}else{
					if($(this).parent().parent().parent().hasClass("open")) {
						$("#sidebar .active").removeClass("active");
						$(this).parent().addClass("active");
					}else{
						$("#sidebar .open").removeClass("open");
						$("#sidebar .active").removeClass("active");
						$(this).parent().parent().prev("a").trigger("click");
						$(this).parent().addClass("active");
					}
				}
			}
		}
	});
}

/*跳转tab页面(触发click)*/
function goTabId(tid, callback){
	$(".menu_a").each(function(){
		var e_tid = $(this).attr("tid");
		if(e_tid==tid) {
			if(!$(this).parent().hasClass("active")){
				if($(this).parent().parent().parent().hasClass("open")) {

				}else{
					$(this).parent().parent().prev("a").trigger("click");
				}
				var tabExist = $("#tab-ul").find("[tid="+tid+"]");
				if(tabExist.length == 0){
					$(this).trigger("click");
				}else{
					tabExist.trigger("click");
					if(callback != undefined && typeof callback === "function"){
						callback();
					}
				}
			}
		}
	});
}

/*打开指定页面后的回调函数*/
function afterOpenTab(){
	
}

/*清空打开指定页面后的回调函数*/
function clearAfterOpenTab(){
	afterOpenTab = function(){
		
	}
}

/*获取子页面window变量*/
function getIframeWindow(tid){
	if($("#iframe_"+tid)[0] == undefined){
		return undefined
	}
	return $("#iframe_"+tid)[0].contentWindow;
}

/*显示tab左右按钮*/
function showScrollButton(){
	var tab_left_width = $("#tab-left").width();		//tab本身的宽度
	var tab_li_width = 0;							//tab总数的宽度
	$(".tab-li").each(function(){
		tab_li_width += $(this).outerWidth(true);
	});
	
	if(tab_li_width > tab_left_width){
		$("#tab-right").show();
	}else{
		$("#tab-right").hide();
		$("#tab-ul").animate({"left": 0}, 100);
	}
}
