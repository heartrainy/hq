(function($,layer){
	
	clds_layer = {
		msg: function(a, b, c){   //a:信息   b:info、error、warn
			var callback = function(){
				
			};
			if(c != undefined && typeof c == "function"){
				callback = c;
			}
			if(b=="info"){
				layer.msg(a, {icon:1, time:1500, shade:[0], shadeClose: true}, callback);
			}else if(b=="error"){
				layer.msg(a, {icon:2, time:1500, shade:[0], shadeClose: true}, callback);
			}else if(b=="warn"){
				layer.msg(a, {icon:7, time:1500, shade:[0], shadeClose: true}, callback);
			}
		},
		alert: function(a, b, c, d){
			var callback = function(){};
			var cancelFun = function(){};
			if(c != undefined && typeof c == "function"){
				callback = c;
			}
			if(c != undefined && typeof c != "function"){
				if(c.cancel != undefined){
					cancelFun = c.cancel;
				}
			}
			if(d != undefined && typeof d == "function"){
				callback = d;
			}
			if(b=="info"){
				layer.alert(a, {icon:1,skin:"layui-layer-style1",cancel:cancelFun}, function(index){
					callback();
					layer.close(index);
				});
			}else if(b=="error"){
				layer.alert(a, {icon:2,skin:"layui-layer-style1",cancel:cancelFun}, function(index){
					callback();
					layer.close(index);
				});
			}else if(b=="warn"){
				layer.alert(a, {icon:7,skin:"layui-layer-style1",cancel:cancelFun}, function(index){
					callback();
					layer.close(index);
				});
			}
		}
	}
	
})($,layer)