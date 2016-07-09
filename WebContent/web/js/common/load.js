var inf = {
	baseUrl:$("#base_url").val(),
	//all 1=整屏   0=对应div
	//id  div的id
	//left:距上边框  top:距下边框  width:指定div内宽度 height:指定div内高度
	loading:function(option){
		var all = option.all;
		var left = "";
		var top = "";
		var width = "";
		var height = "";
		if(option.width == undefined || option.width == ""){
			width = $("#"+option.id).width();
		}else{
			width = option.width;
		}
		if(option.height == undefined || option.height == ""){
			height = $("#"+option.id).height();
		}else{
			height = option.height;
		}
		if(option.top == undefined || option.top == ""){
			top = "";
		}else{
			top = "top:"+option.top+"px;";
		}
		if(option.left == undefined || option.left == ""){
			left = "";
		}else{
			left = "left:"+option.left+"px;";
		}
		if(option.content == undefined || option.content == ""){
			content = "正在加载，请等待...";
		}else{
			content = option.content;
		}
		
		
		var div_loading_w = 120;
		var div_loading_h = 16;
		var body_w = $("body").width();
		var body_h = $("body").height();
		var loading_offset_left = 0;
		var loading_offset_top = 0;
		var html_loading = "";
		if(all=="1"){
			loading_offset_left = (body_w-div_loading_w)/2;
			loading_offset_top = (body_h-div_loading_h)/2;
			html_loading = "<div id='loading' style='position:absolute;width:100%;height:100%;left:0px;top:0px;background:#E0ECFF;opacity:0.8;filter:alpha(opacity=80);z-index:99999;'>"+  
			 "<div style='position:absolute;left:"+loading_offset_left+"px;top:"+loading_offset_top+"px;width:auto;padding:12px 5px 12px 30px;"+  
			 "background:#fff url("+inf.baseUrl+"/web/img/loading.gif) no-repeat scroll 6px 14px;border:2px solid #ccc;color:#000;'>"+content+ 
			 "</div></div>";
			$("body").append(html_loading);
		}else{
			var loading_offset_left = (width-div_loading_w)/2;
			var loading_offset_top = (height-div_loading_h)/2;
			html_loading = "<div id='loading' style='position:absolute;width:"+width+"px;height:"+height+"px;"+left+top+"background:#E0ECFF;opacity:0.8;filter:alpha(opacity=80);z-index:99999;'>"+  
			 "<div style='position:absolute;left:"+loading_offset_left+"px;top:"+loading_offset_top+"px;width:auto;padding:12px 5px 12px 30px;"+  
			 "background:#fff url("+inf.baseUrl+"/web/img/loading.gif) no-repeat scroll 6px 14px;border:2px solid #ccc;color:#000;'>"+content+
			 "</div></div>";
			$("#"+option.id).prepend(html_loading);
		}
		
	},
	loaded:function(){
		$("#loading").remove();
	},
	checkExistTrue:function(id,name){
		$("#"+id).validatebox({
	        validType: "checkExistTrue['"+name+"']"
	    });
		$("#"+id).validatebox("validate");
	},
	checkExistFalse:function(id,validTypes){
		if(validTypes==undefined){
			$("#"+id).validatebox({
		        validType: "checkExistFalse"
		    });
		}else{
			validTypes.push("checkExistFalse");
			$("#"+id).validatebox({
		        validType: validTypes
		    });
		}
		$("#"+id).validatebox("validate");
	}
};